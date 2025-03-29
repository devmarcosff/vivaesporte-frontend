import fs from "fs";
import path from "path";
import { jsonPatterns, src } from "./lang.pattern.js";

const combinedData = {};

function findFilesByPatterns(patterns) {
  const matchedFiles = [];

  patterns.forEach((pattern) => {
    const baseDir = pattern.split("**")[0];
    const regexPattern = new RegExp(pattern.replace(baseDir, "").replace(/\*\*/g, ".*").replace(/\*/g, "[^/]*"));

    function traverseDir(currentDir) {
      const entries = fs.readdirSync(currentDir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(currentDir, entry.name);
        if (entry.isDirectory()) {
          traverseDir(fullPath);
        } else if (regexPattern.test(fullPath.replace(baseDir, ""))) {
          matchedFiles.push(fullPath);
        }
      }
    }

    traverseDir(baseDir);
  });

  return matchedFiles;
}

export function bundleJson() {
  const files = findFilesByPatterns(jsonPatterns());

  files.forEach((file) => {
    const langKey = path.basename(file, path.extname(file));
    const fileData = JSON.parse(fs.readFileSync(file, "utf8"));
    combinedData[langKey] = { ...combinedData[langKey], ...fileData };
  });

  Object.keys(combinedData).forEach((key) => {
    const outputFile = `${src}/locales/${key}.json`;
    fs.writeFileSync(outputFile, JSON.stringify(combinedData[key], null, 2), "utf8");
  });
}

bundleJson();
