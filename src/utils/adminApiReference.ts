import { useTranslations } from "@/i18n";
import { gunzipSync } from "node:zlib";
import packedSpec from "@/data/admin-api/openapi-2.0.6-preview.b64?raw";
import packedDelta from "@/data/admin-api/openapi-2.0.6-update.b64?raw";

export type Schema = {
  $ref?: string;
  type?: string | string[];
  format?: string;
  description?: string;
  properties?: Record<string, Schema>;
  items?: Schema;
  required?: string[];
  enum?: (string | number | boolean | null)[];
  allOf?: Schema[];
  oneOf?: Schema[];
  anyOf?: Schema[];
  nullable?: boolean;
  additionalProperties?: Schema | boolean;
  default?: unknown;
  example?: unknown;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  minimum?: number;
  maximum?: number;
};

export type ApiParameter = {
  name: string;
  in: string;
  required?: boolean;
  description?: string;
  schema?: Schema;
};

type ApiContent = { mediaType: string; schema?: Schema } | null;

export type ApiOperation = {
  tag: string;
  method: string;
  path: string;
  description?: string;
  security?: Record<string, unknown[]>[];
  parameters?: ApiParameter[];
  requestBody?: { required: boolean; content?: ApiContent };
  responses: Record<string, { description: string; content?: ApiContent }>;
};

type ApiSpec = {
  sourceCommit: string;
  openapi: string;
  paths: Record<string, Record<string, Omit<ApiOperation, "method" | "path">>>;
  schemas: Record<string, Schema>;
};

const spec = JSON.parse(
  gunzipSync(Buffer.from(packedSpec.trim(), "base64")).toString("utf8")
) as ApiSpec;

type ApiDelta = {
  sourceCommit: string;
  schemas: Record<string, Schema>;
  responses: Record<string, Record<string, ApiOperation["responses"]>>;
};
const delta = JSON.parse(
  gunzipSync(Buffer.from(packedDelta.trim(), "base64")).toString("utf8")
) as ApiDelta;
Object.assign(spec.schemas, delta.schemas);
for (const [path, methods] of Object.entries(delta.responses)) {
  for (const [method, responses] of Object.entries(methods)) {
    if (!spec.paths[path]?.[method]) {
      throw new Error(`OpenAPI snapshot mismatch: ${method} ${path}`);
    }
    spec.paths[path][method].responses = responses;
  }
}
spec.sourceCommit = delta.sourceCommit;

export const sourceCommit = spec.sourceCommit;
export const schemaDefinitions = spec.schemas;
export const apiOperations: ApiOperation[] = Object.entries(spec.paths)
  .flatMap(([path, methods]) =>
    Object.entries(methods).map(([method, op]) => ({
      ...op,
      path,
      method: method.toUpperCase(),
    }))
  )
  .sort(
    (a, b) =>
      a.tag.localeCompare(b.tag) ||
      a.path.localeCompare(b.path) ||
      a.method.localeCompare(b.method)
  );

export const apiGroups = Array.from(
  new Set(apiOperations.map(operation => operation.tag))
);

export type PropertyRow = {
  name: string;
  type: string;
  required: boolean | null;
  nullable: boolean;
  description: string;
};

function refName(ref: string) {
  return ref.split("/").at(-1) ?? ref;
}

export function describeType(input?: Schema, locale = "en"): string {
  if (!input) return useTranslations(locale).adminApiReference.unknownType;
  if (input.$ref) return refName(input.$ref);
  if (input.oneOf?.length) return input.oneOf.map(item => describeType(item, locale)).join(" | ");
  if (input.anyOf?.length) return input.anyOf.map(item => describeType(item, locale)).join(" | ");
  if (input.allOf?.length) return input.allOf.map(item => describeType(item, locale)).join(" & ");
  const types = Array.isArray(input.type)
    ? input.type.filter(t => t !== "null")
    : input.type
      ? [input.type]
      : [];
  const type =
    types.join(" | ") || (input.properties ? "object" : useTranslations(locale).adminApiReference.unknownType);
  if (type === "array") return `array<${describeType(input.items, locale)}>`;
  if (type === "object" && input.additionalProperties) {
    return `map<string, ${typeof input.additionalProperties === "object" ? describeType(input.additionalProperties, locale) : "any"}>`;
  }
  return input.format ? `${type} (${input.format})` : type;
}

function isNullable(schema: Schema) {
  return Boolean(
    schema.nullable ||
    (Array.isArray(schema.type) && schema.type.includes("null")) ||
    schema.anyOf?.some(s => s.type === "null")
  );
}

function constraints(schema: Schema, locale: string): string {
  const labels = useTranslations(locale).adminApiReference;
  const values = [
    schema.description,
    schema.enum ? `${labels.enumLabel}: ${schema.enum.map(String).join(", ")}` : undefined,
    schema.default !== undefined
      ? `${labels.defaultLabel}: ${JSON.stringify(schema.default)}`
      : undefined,
    schema.pattern ? `${labels.patternLabel}: ${schema.pattern}` : undefined,
    schema.minLength !== undefined
      ? `${labels.minLengthLabel}: ${schema.minLength}`
      : undefined,
    schema.maxLength !== undefined
      ? `${labels.maxLengthLabel}: ${schema.maxLength}`
      : undefined,
    schema.minimum !== undefined ? `${labels.minimumLabel}: ${schema.minimum}` : undefined,
    schema.maximum !== undefined ? `${labels.maximumLabel}: ${schema.maximum}` : undefined,
  ];
  return values.filter(Boolean).join(" · ");
}

/** Expand $refs and array items into fully qualified property paths.
 * A cyclic reference is displayed by name without recursive expansion.
 */
export function modelRows(source?: Schema, locale = "en"): PropertyRow[] {
  if (!source) return [];
  const rows: PropertyRow[] = [];
  const walk = (
    schema: Schema,
    prefix: string,
    depth: number,
    refs: ReadonlySet<string>
  ) => {
    if (depth > 12 || rows.length > 600) return;
    let current = schema;
    let currentRefs = refs;
    if (schema.$ref) {
      const name = refName(schema.$ref);
      if (refs.has(name) || !schemaDefinitions[name]) return;
      current = schemaDefinitions[name];
      currentRefs = new Set([...refs, name]);
    }
    if (current.allOf?.length) {
      current.allOf.forEach(part => walk(part, prefix, depth + 1, currentRefs));
    }
    if (current.oneOf?.length || current.anyOf?.length) {
      (current.oneOf ?? current.anyOf ?? []).forEach((part, i) =>
        walk(part, `${prefix}<variant${i + 1}>`, depth + 1, currentRefs)
      );
    }
    if (current.type === "array" && current.items) {
      walk(current.items, `${prefix}[]`, depth + 1, currentRefs);
    }
    const required = new Set(current.required ?? []);
    for (const [name, child] of Object.entries(current.properties ?? {})) {
      const path = prefix ? `${prefix}.${name}` : name;
      rows.push({
        name: path,
        type: describeType(child, locale),
        required: required.has(name),
        nullable: isNullable(child),
        description: constraints(child, locale),
      });
      walk(child, path, depth + 1, currentRefs);
    }
  };
  walk(source, "", 0, new Set());
  if (rows.length === 0) {
    rows.push({
      name: useTranslations(locale).adminApiReference.bodyField,
      type: describeType(source, locale),
      required: null,
      nullable: isNullable(source),
      description: constraints(source, locale),
    });
  }
  return rows;
}

export function contentSchema(content?: ApiContent): Schema | undefined {
  return content?.schema;
}

export function successfulResponseHasSchema(operation: ApiOperation) {
  return Object.entries(operation.responses).some(
    ([status, response]) =>
      status.startsWith("2") && Boolean(contentSchema(response.content))
  );
}
