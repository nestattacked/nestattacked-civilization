import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  FeatureType: string;
  YieldType: string;
  YieldChange: number;
}

interface FloatAttributes {
  FeatureType?: string;
  YieldType?: string;
  YieldChange?: number;
}

const FeatureYieldChanges: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Feature_YieldChanges'
);

export { FeatureYieldChanges };
