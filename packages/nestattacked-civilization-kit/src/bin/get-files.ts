import globby from 'globby';
import Config from './config';

interface GetFiles {
  (): Promise<string[]>;
}

const getSqlSourceFiles: GetFiles = async () => {
  return globby([`${Config.rootDir}/**/*.sql.ts`]);
};

const getSqlDistFiles: GetFiles = async () => {
  const files: string[] = await globby([`${Config.outDir}/**/*.sql`]);
  return files.map((file: string) =>
    file.replace(new RegExp(`${Config.outDir}/`), '')
  );
};

const getLuaSourceFiles: GetFiles = async () => {
  return globby([`${Config.rootDir}/**/*.lua.ts`]);
};

const getLuaDistFiles: GetFiles = async () => {
  const files: string[] = await globby([`${Config.outDir}/**/*.lua`]);
  return files.map((file: string) =>
    file.replace(new RegExp(`${Config.outDir}/`), '')
  );
};

const getLuaTempFiles: GetFiles = async () => {
  return globby([`${Config.outDir}/**/*.lua.lua`]);
};

export {
  getSqlSourceFiles,
  getLuaSourceFiles,
  getLuaTempFiles,
  getSqlDistFiles,
  getLuaDistFiles
};
