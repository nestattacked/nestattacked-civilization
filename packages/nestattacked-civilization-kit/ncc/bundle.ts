import path from 'path';
import { config } from './config';
import { rollup, RollupOptions, OutputOptions } from 'rollup';
import typescript from 'rollup-plugin-typescript2';

const bundle = async () => {
  const sourcePath = path.resolve(process.cwd(), `${config.rootDir}/index.ts`);
  const inputOptions: RollupOptions = {
    input: sourcePath,
    onwarn: () => {
      return;
    },
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
    format: 'esm'
  };
  const result = await rollup(inputOptions);
  return result.generate(outputOptions);
};

export { bundle };
