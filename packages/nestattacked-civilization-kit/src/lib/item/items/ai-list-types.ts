import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ListType: string;
}

interface FloatAttributes {
  ListType?: string;
}

const AiListTypes: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'AiListTypes'
);

export { AiListTypes };
