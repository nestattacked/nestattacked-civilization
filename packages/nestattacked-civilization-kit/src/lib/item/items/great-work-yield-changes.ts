import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  GreatWorkType: string;
  YieldType: string;
  YieldChange: number;
}

interface FloatAttributes {
  GreatWorkType?: string;
  YieldType?: string;
  YieldChange?: number;
}

const GreatWorkYieldChanges: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'GreatWork_YieldChanges'
);

export { GreatWorkYieldChanges };
