import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ListType: string;
  BaseList?: string;
}

interface FloatAttributes {
  ListType?: string;
  BaseList?: string;
}

const AiOperationLists: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'AiOperationLists'
);

export { AiOperationLists };
