import globby from 'globby';
import { config } from './config';

type GetFiles = () => Promise<string[]>;

const getSqlSourceFiles: GetFiles = async () => {
  return globby([`${config.rootDir}/**/*.sql.ts`]);
};

const getSqlDistFiles: GetFiles = async () => {
  const files: string[] = await globby([`${config.outDir}/**/*.sql`]);
  return files.map((file: string) =>
    file.replace(new RegExp(`${config.outDir}/`), '')
  );
};

const getLuaSourceFiles: GetFiles = async () => {
  return globby([`${config.rootDir}/**/*.lua.ts`]);
};

const getLuaDistFiles: GetFiles = async () => {
  const files: string[] = await globby([`${config.outDir}/**/*.lua`]);
  return files.map((file: string) =>
    file.replace(new RegExp(`${config.outDir}/`), '')
  );
};

const getLuaTempFiles: GetFiles = async () => {
  return globby([`${config.outDir}/**/*.lua.lua`]);
};

export {
  getSqlSourceFiles,
  getLuaSourceFiles,
  getLuaTempFiles,
  getSqlDistFiles,
  getLuaDistFiles
};
