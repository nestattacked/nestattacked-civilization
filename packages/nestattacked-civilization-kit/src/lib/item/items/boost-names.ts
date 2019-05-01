import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  BoostType: string;
  BoostValue: number;
}

interface FloatAttributes {
  BoostType?: string;
  BoostValue?: number;
}

const BoostNames: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'BoostNames'
);

export { BoostNames };
