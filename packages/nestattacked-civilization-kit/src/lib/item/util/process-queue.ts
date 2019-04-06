import { Item, Operator } from '../type';
import XML from 'xml';
import { groupBy, Dictionary, map } from 'lodash';

interface Json {
  [key: string]: any;
}

type ProcessQueue = (itemQueue: Item[]) => void;
type ProcessGroup = (items: Item[], table: string) => Json;
type ProcessItem = (item: Item) => Json;
type CreateAttributes = (value: Json) => Json;

const processQueue: ProcessQueue = itemQueue => {
  const groupedItem: Dictionary<Item[]> = groupBy(itemQueue, 'table');
  const processedItems: Json[] = map(groupedItem, processGroup);
  const gameInfo: Json = {
    GameInfo: processedItems
  };
  const gameInfoXml: string = XML(gameInfo, {
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

const createAttributes: CreateAttributes = attributes =>
  map(attributes, (value, key) => ({ _attr: { [key]: value } }));

export { processQueue };
