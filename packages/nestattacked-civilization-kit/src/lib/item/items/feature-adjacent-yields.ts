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

const FeatureAdjacentYields: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Feature_AdjacentYields'
);

export { FeatureAdjacentYields };
