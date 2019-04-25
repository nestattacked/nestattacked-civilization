import { compileFilesWithOptions } from 'typescript-to-lua';
import { config } from '../util/config';
import { rollup, RollupOptions, RollupBuild, OutputOptions } from 'rollup';
import typescript from 'rollup-plugin-typescript2';
import { remove, move, readFile, outputFile } from 'fs-extra';
import path from 'path';

type CompileFile = (
  sourceFileName: string,
  distFileName: string
) => Promise<void>;

type GetAdjustedCode = (filePath: string) => Promise<string>;

const compileFile: CompileFile = async (sourceFileName, distFileName) => {
  const sourcePath: string = path.resolve(
    process.cwd(),
    `${config.rootDir}/${sourceFileName}.ts`
  );
  const bundlePath: string = path.resolve(
    process.cwd(),
    `${config.outDir}/${sourceFileName}.ts`
  );
  const tempPath: string = path.resolve(
    process.cwd(),
    `${config.outDir}/${sourceFileName}.lua`
  );
  const targetPath: string = path.resolve(
    process.cwd(),
    `${config.outDir}/${distFileName}.lua`
  );
  const inputOptions: RollupOptions = {
    input: sourcePath,
    plugins: [
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            module: 'es2015'
          }
        },
        clean: true
      })
    ]
  };
  const outputOptions: OutputOptions = {
    format: 'esm',
    file: bundlePath
  };
  const bundle: RollupBuild = await rollup(inputOptions);
  await bundle.write(outputOptions);
  compileFilesWithOptions([bundlePath], {
    rootDir: config.outDir,
    outDir: config.outDir,
    noHeader: true
  });
  await remove(bundlePath);
  await move(tempPath, targetPath);
  const code: string = await getAdjustedCode(targetPath);
  await outputFile(targetPath, code);
};

const getAdjustedCode: GetAdjustedCode = async filePath => {
  let code: string = (await readFile(filePath)).toString('utf8');
  code = code.replace(
    'local __TSTL_nestattacked_civilization_kit = require("nestattacked-civilization-kit");\n',
    ''
  );
  code = code.replace(
    /local [a-zA-Z]+ = __TSTL_nestattacked_civilization_kit\.[a-zA-Z]+;\n/g,
    ''
  );
  return includeHeader + '\n' + code;
};

const includeHeader: string = [
  'include("InstanceManager");',
  'include("SupportFunctions");'
].join('\n');

export { compileFile };
