import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  CivicType: string;
  ModifierId: string;
}

interface FloatAttributes {
  CivicType?: string;
  ModifierId?: string;
}

const CivicModifiers: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'CivicModifiers'
);

export { CivicModifiers };
