import path from 'path';
import { sync as loadJsonFile } from 'load-json-file';

interface NccConfig {
  rootDir: string;
  outDir: string;
  modId: string;
  name: string;
  description: string;
  teaser: string;
}

const configPath: string = path.resolve(process.cwd(), 'ncconfig.json');
const config: NccConfig = loadJsonFile(configPath);

export { config };
