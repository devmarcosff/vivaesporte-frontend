import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const src = path.join(__dirname, "..");
export const jsonPatterns = () => {
  return [
    `${src}/views/**/locales/*.json`,
    `${src}/components/**/locales/*.json`,
    `${src}/app/**/**/locales/*.json`,
    `${src}/app/**/**/**/locales/*.json`,
  ];
};
