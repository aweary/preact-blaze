const gzipsize = require("gzip-size");
const fs = require("fs");
const path = require("path");
const pretty = require("pretty-bytes");
const chalk = require("chalk");

const BUILD_PATH = path.resolve(__dirname, "../lib");
const BUILD_HISTORY_MANIFEST_PATH = path.resolve(__dirname, "../.build");

const buildManifest = fs.existsSync(BUILD_HISTORY_MANIFEST_PATH)
  ? JSON.parse(fs.readFileSync(BUILD_HISTORY_MANIFEST_PATH))
  : {};

fs.readdir(BUILD_PATH, (err, files) => {
  if (err) throw err;
  files.forEach(file => {
    let output = "";
    const BUILD_FILE_PATH = path.resolve(BUILD_PATH, file);
    const contents = fs.readFileSync(BUILD_FILE_PATH);
    const size = gzipsize.sync(contents);
    const previousSize = buildManifest[file] || size;
    const delta = size - previousSize;
    output += `${chalk.blue(file)}: ${pretty(size)}`;
    if (delta) {
      output += delta >= 0
        ? ` ${chalk.red("+" + pretty(delta))}`
        : ` ${chalk.green(pretty(delta))}`;
    }
    console.log(output);
    buildManifest[file] = size;
  });
  fs.writeFileSync(BUILD_HISTORY_MANIFEST_PATH, JSON.stringify(buildManifest));
});
