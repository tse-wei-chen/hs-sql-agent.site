import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const visualPath = path.join(root, "src/components/docs/DocVisual.astro");
const cssPath = path.join(root, "src/styles/docs.css");

const visual = fs.readFileSync(visualPath, "utf8");
const css = fs.readFileSync(cssPath, "utf8");

const kinds = [
  "overview",
  "compiler",
  "safe-dml",
  "mcp",
  "databases",
  "security",
  "distributed",
  "observability",
];

const fail = message => {
  console.error(`[doc-visual-animation] ${message}`);
  process.exitCode = 1;
};

const blockFor = kind => {
  const index = kinds.indexOf(kind);
  const marker = `kind === "${kind}"`;
  const start = visual.indexOf(marker);
  if (start < 0) {
    fail(`Missing DocVisual kind: ${kind}`);
    return "";
  }

  if (index === kinds.length - 1) return visual.slice(start);

  const nextMarker = `kind === "${kinds[index + 1]}"`;
  const end = visual.indexOf(nextMarker, start + marker.length);
  return end < 0 ? visual.slice(start) : visual.slice(start, end);
};

const requiredByKind = {
  overview: [
    "doc-svg-float doc-svg-delay-1",
    "doc-svg-float doc-svg-delay-2",
    "doc-svg-float doc-svg-delay-3",
    "<animateMotion",
    "doc-svg-pulse",
  ],
  compiler: ["doc-svg-stage", "doc-svg-stage-ring", "doc-svg-scan", "<animateMotion"],
  "safe-dml": ["doc-svg-stage", "doc-svg-human", "doc-svg-pulse-ring", "<animateMotion"],
  mcp: ["doc-svg-float", "<animateMotion"],
  databases: ["doc-svg-orbit", "doc-svg-float", "<animateMotion"],
  security: ["doc-svg-gate", "<animateMotion"],
  distributed: ["doc-svg-float", "<animateMotion"],
  observability: ["doc-svg-span", "<animateMotion"],
};

for (const kind of kinds) {
  const block = blockFor(kind);
  for (const token of requiredByKind[kind]) {
    if (!block.includes(token)) {
      fail(`${kind} visual lost animation primitive: ${token}`);
    }
  }
}

const animateMotionCount = (visual.match(/<animateMotion\b/g) ?? []).length;
if (animateMotionCount < 11) {
  fail(`Expected at least 11 animateMotion elements, found ${animateMotionCount}`);
}

for (const keyframe of [
  "doc-float",
  "doc-rotate",
  "doc-scan",
  "doc-pulse-ring",
  "doc-gate-pulse",
  "doc-pulse-opacity",
]) {
  if (!css.includes(`@keyframes ${keyframe}`)) {
    fail(`Missing CSS keyframes: ${keyframe}`);
  }
}

for (const animation of [
  "animation: doc-float",
  "animation: doc-rotate",
  "animation: doc-scan",
  "animation: doc-pulse-ring",
  "animation: doc-gate-pulse",
  "animation: doc-pulse-opacity",
]) {
  if (!css.includes(animation)) {
    fail(`Missing CSS animation binding: ${animation}`);
  }
}

if (!css.includes("@media (prefers-reduced-motion: reduce)")) {
  fail("Reduced-motion accessibility fallback must remain present");
}

if (!process.exitCode) {
  console.log(
    `[doc-visual-animation] OK: ${kinds.length} visual kinds, ${animateMotionCount} animateMotion elements, CSS motion bindings intact.`
  );
}
