import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";
import ts from "typescript";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = path.join(rootDir, "packages", "core", "src", "index.ts");
const outputPath = path.join(rootDir, "docs", "icon-data.js");

const source = await fs.readFile(sourcePath, "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2020,
  },
  fileName: sourcePath,
});

const module = { exports: {} };
const sandbox = {
  module,
  exports: module.exports,
  require(specifier) {
    throw new Error(`Unsupported import in docs data generator: ${specifier}`);
  },
};

vm.runInNewContext(compiled.outputText, sandbox, { filename: sourcePath });

const { icons = {}, categories = [] } = module.exports;
const docsIcons = Object.fromEntries(
  Object.entries(icons).map(([name, icon]) => [
    name,
    {
      c: icon.category,
      t: icon.tags,
      p: icon.paths,
    },
  ])
);

const payload = `window.__ICONORA_DOCS__ = ${JSON.stringify(
  { icons: docsIcons, categories },
  null,
  2
)};
`;

await fs.writeFile(outputPath, payload, "utf8");
console.log(`Generated ${path.relative(rootDir, outputPath)}`);
