#!/usr/bin/env node
import { clean } from './clean';
import { bundle } from './bundle';
import { build } from './build';

const main = async () => {
  await clean();
  const bundleResult = await bundle();
  const code = bundleResult.output[0].code;
  await build(code);
};

main();
