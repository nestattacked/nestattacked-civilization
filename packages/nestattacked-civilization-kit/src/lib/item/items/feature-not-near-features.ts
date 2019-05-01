import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  FeatureType: string;
  FeatureTypeAvoid: string;
}

interface FloatAttributes {
  FeatureType?: string;
  FeatureTypeAvoid?: string;
}

const FeatureNotNearFeatures: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Feature_NotNearFeatures'
);

export { FeatureNotNearFeatures };
