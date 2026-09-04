export type DocsVersionStatus = "current" | "supported" | "archived";

export type DocsVersionDefinition = {
  version: string;
  label: string;
  status: DocsVersionStatus;
  parent: string | null;
  removed?: readonly string[];
  redirects?: Readonly<Record<string, string>>;
};

const versionDefinitions = [
  {
    version: "2.0.2",
    label: "2.0.2",
    status: "current",
    parent: null,
    removed: [],
    redirects: {},
  },
] as const satisfies readonly DocsVersionDefinition[];

export const docsVersions = {
  current: "2.0.2",
  versions: versionDefinitions,
} as const;

/** Widened view used by resolvers so empty literal maps retain Record value types. */
export const docsVersionDefinitions: readonly DocsVersionDefinition[] = versionDefinitions;

export type DocsVersion = (typeof versionDefinitions)[number]["version"];

export function getDocsVersionDefinition(
  version: string
): DocsVersionDefinition | undefined {
  return docsVersionDefinitions.find(item => item.version === version);
}

export function isDocsVersion(version: string): boolean {
  return Boolean(getDocsVersionDefinition(version));
}

/** Returns the inheritance chain from the oldest baseline to the requested version. */
export function getDocsVersionLineage(version: string): DocsVersionDefinition[] {
  const lineage: DocsVersionDefinition[] = [];
  const seen = new Set<string>();
  let current: string | null = version;

  while (current) {
    if (seen.has(current)) {
      throw new Error(`Documentation version inheritance cycle detected at ${current}.`);
    }
    seen.add(current);

    const definition = getDocsVersionDefinition(current);
    if (!definition) {
      throw new Error(`Unknown documentation version: ${current}.`);
    }

    lineage.push(definition);
    current = definition.parent;
  }

  return lineage.reverse();
}

/**
 * Resolves a redirect declared by the requested version or one of its parents.
 * Child declarations win over inherited declarations.
 */
export function getDocsVersionRedirect(
  version: string,
  slug: string
): string | undefined {
  const lineage = getDocsVersionLineage(version).reverse();
  for (const definition of lineage) {
    const target = definition.redirects?.[slug];
    if (target) return target;
    if (definition.removed?.includes(slug)) return undefined;
  }
  return undefined;
}
