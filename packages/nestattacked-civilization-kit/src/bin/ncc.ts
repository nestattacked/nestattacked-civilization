#!/usr/bin/env node
import { clean } from './util';
import { buildLua } from './build-lua';
import { buildXml } from './build-xml';
import { generateModInfo } from './generate-mod-info';

type Main = () => Promise<void>;

const main: Main = async () => {
  await clean();
  await buildLua();
  await buildXml();
  await generateModInfo();
};

main()
  .then()
  .catch();
