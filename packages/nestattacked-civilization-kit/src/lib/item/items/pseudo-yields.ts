import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  PseudoYieldType: string;
  DefaultValue?: number;
}

interface FloatAttributes {
  PseudoYieldType?: string;
  DefaultValue?: number;
}

const PseudoYields: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'PseudoYields'
);

export { PseudoYields };
