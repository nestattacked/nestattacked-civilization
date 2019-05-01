import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  FeatureType: string;
  FeatureTypeAdjacent: string;
}

interface FloatAttributes {
  FeatureType?: string;
  FeatureTypeAdjacent?: string;
}

const FeatureAdjacentFeatures: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Feature_AdjacentFeatures'
);

export { FeatureAdjacentFeatures };
