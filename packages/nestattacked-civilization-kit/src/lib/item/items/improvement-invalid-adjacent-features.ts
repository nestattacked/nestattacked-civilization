import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ImprovementType: string;
  FeatureType: string;
}

interface FloatAttributes {
  ImprovementType?: string;
  FeatureType?: string;
}

const ImprovementInvalidAdjacentFeatures: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Improvement_InvalidAdjacentFeatures'
);

export { ImprovementInvalidAdjacentFeatures };
