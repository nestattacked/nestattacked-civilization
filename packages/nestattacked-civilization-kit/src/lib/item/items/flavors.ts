import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  FlavorType: string;
}

interface FloatAttributes {
  FlavorType?: string;
}

const Flavors: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Flavors'
);

export { Flavors };
