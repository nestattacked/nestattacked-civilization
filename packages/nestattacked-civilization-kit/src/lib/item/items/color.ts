import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  Type: string;
  Color: string;
}

interface FloatAttributes {
  Type?: string;
  Color?: string;
}

const Color: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Colors'
);

export { Color };
