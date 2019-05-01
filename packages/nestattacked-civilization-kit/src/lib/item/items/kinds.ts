import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  Kind: string;
  Hash?: number;
}

interface FloatAttributes {
  Kind?: string;
  Hash?: number;
}

const Kinds: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Kinds'
);

export { Kinds };
