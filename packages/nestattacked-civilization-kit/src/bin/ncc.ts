#!/usr/bin/env node
import { clean } from './clean';
import { buildLuaFile } from './build-lua-file';
import { buildSqlFile } from './build-sql-file';
import { generateModInfo } from './generate-mod-info';

interface Main {
  (): Promise<void>;
}

const main: Main = async () => {
  await clean();
  await buildLuaFile();
  await buildSqlFile();
  await generateModInfo();
};

main()
  .then()
  .catch();
