import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ImprovementType: string;
  YieldType: string;
  YieldChange: number;
}

interface FloatAttributes {
  ImprovementType?: string;
  YieldType?: string;
  YieldChange?: number;
}

const ImprovementYieldChanges: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Improvement_YieldChanges'
);

export { ImprovementYieldChanges };
