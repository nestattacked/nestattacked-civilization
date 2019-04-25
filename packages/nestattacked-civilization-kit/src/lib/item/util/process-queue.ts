import { Item, Operator } from '../type';
import XML from 'xml';
import { groupBy, Dictionary, map } from 'lodash';
import { sourceFiles } from '../../../bin/util/source-file';
import path from 'path';

interface Json {
  [key: string]: any;
}

type ProcessQueue = (itemQueue: Item[]) => void;
type ProcessGroup = (items: Item[], table: string) => Json;
type ProcessItem = (item: Item) => Json;
type CreateAttributes = (value: Json) => Json;
type GetMainType = () => string;

const processQueue: ProcessQueue = itemQueue => {
  const groupedItem: Dictionary<Item[]> = groupBy(itemQueue, 'table');
  const processedItems: Json[] = map(groupedItem, processGroup);
  const mainType: string = getMainType();
  const xmlJson: Json = {
    [mainType]: processedItems
  };
  const gameInfoXml: string = XML(xmlJson, {
    declaration: true,
    indent: '  '
  });
  // tslint:disable-next-line: no-console
  console.log(gameInfoXml);
};

const processGroup: ProcessGroup = (items, table) => ({
  [table]: items.map(processItem)
});

const processItem: ProcessItem = item => {
  switch (item.operator) {
    case Operator.Create:
      return { Row: createAttributes(item.value) };
    case Operator.Update:
      return {
        Update: [
          { Where: createAttributes(item.condition) },
          { Set: createAttributes(item.value) }
        ]
      };
    case Operator.Delete:
      return { Delete: createAttributes(item.condition) };
  }
};

const getMainType: GetMainType = () => {
  const fileName: string = path.parse(process.argv[1]).name;
  return sourceFiles.filter(
    sourceFile => sourceFile.sourceFileName === fileName
  )[0].mainType;
};

const createAttributes: CreateAttributes = attributes =>
  map(attributes, (value, key) => ({ _attr: { [key]: value } }));

export { processQueue };
