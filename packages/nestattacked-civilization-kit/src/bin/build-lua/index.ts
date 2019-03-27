import { config, getLuaSourceFiles, getLuaTempFiles } from '../util';
import { compileFilesWithOptions } from 'typescript-to-lua';
import { readFile, outputFile, remove } from 'fs-extra';
import { uniq } from 'lodash';

type AsyncFunction = () => Promise<void>;
type BuildLua = AsyncFunction;
type Compile = AsyncFunction;
type AdjustTempFiles = AsyncFunction;
type DeleteImport = (code: string) => string;
type AdjustTempFile = (file: string) => Promise<void>;
type TransformTempLua = (file: string) => Promise<string>;
type ExtractModules = (code: string) => string;
type Task = Promise<void>;

const compile: Compile = async () => {
  const files: string[] = await getLuaSourceFiles();
  compileFilesWithOptions(files, {
    rootDir: config.rootDir,
    outDir: config.outDir,
    noHeader: true
  });
};

const deleteImport: DeleteImport = code => {
  return code.replace(
    'local __TSTL_nestattacked_civilization_kit = require("nestattacked-civilization-kit");\n',
    ''
  );
};

const extractModules: ExtractModules = code => {
  const pattern: RegExp = /local (.*) = __TSTL_nestattacked_civilization_kit\.(.*);\n/;
  const modules: string[] = [];
  let matched: RegExpMatchArray = code.match(pattern);
  while (matched !== null) {
    modules.push(matched[1]);
    code = code.replace(pattern, '');
    matched = code.match(pattern);
  }
  return code;
};

const transformTempLua: TransformTempLua = async file => {
  let code: string = (await readFile(file)).toString('utf8');
  code = deleteImport(code);
  code = extractModules(code);
  return code;
};

const adjustTempFile: AdjustTempFile = async file => {
  const luaCode: string = await transformTempLua(file);
  const distPath: string = file.replace(new RegExp(`\.lua\.lua$`), '.lua');
  await outputFile(distPath, luaCode);
  await remove(file);
};

const adjustTempFiles: AdjustTempFiles = async () => {
  const files: string[] = await getLuaTempFiles();
  const tasks: Task[] = files.map(adjustTempFile);
  await Promise.all(tasks);
};

const buildLua: BuildLua = async () => {
  await compile();
  await adjustTempFiles();
};

export { buildLua };
