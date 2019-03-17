import Config from './config';
import { compileFilesWithOptions } from 'typescript-to-lua';
import { readFile, outputFile, remove } from 'fs-extra';
import { getLuaSourceFiles, getLuaTempFiles } from './get-files';
import { moduleMap } from '../lib/api/module-map';
import { uniq } from 'lodash';

interface AsyncFunction {
  (): Promise<void>;
}

type BuildLuaFile = AsyncFunction;
type Compile = AsyncFunction;
type AdjustTempFiles = AsyncFunction;

interface DeleteImport {
  (code: string): string;
}

interface AdjustTempFile {
  (file: string): Promise<void>;
}

interface TransformTempLua {
  (file: string): Promise<string>;
}

interface ExtractModules {
  (code: string): string;
}

interface GenerateIncludeStatement {
  (modules: string[]): string;
}

type Task = Promise<void>;

const compile: Compile = async () => {
  const files: string[] = await getLuaSourceFiles();
  compileFilesWithOptions(files, {
    rootDir: Config.rootDir,
    outDir: Config.outDir,
    noHeader: true
  });
};

const deleteImport: DeleteImport = code => {
  return code.replace(
    'local __TSTL_nestattacked_civilization_kit = require("nestattacked-civilization-kit");\n',
    ''
  );
};

const generateIncludeStatement: GenerateIncludeStatement = modules => {
  const includeNames: string[] = modules
    .map(module => moduleMap[module])
    .filter(includeName => includeName !== undefined);
  return (
    uniq(includeNames)
      .map(includeName => `include("${includeName}");`)
      .join('\n') + (includeNames.length === 0 ? '' : '\n\n')
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
  const includeStatement: string = generateIncludeStatement(modules);
  return `${includeStatement}${code}`;
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

const buildLuaFile: BuildLuaFile = async () => {
  await compile();
  await adjustTempFiles();
};

export { buildLuaFile };
