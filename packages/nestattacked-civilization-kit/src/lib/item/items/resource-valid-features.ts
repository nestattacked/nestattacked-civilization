import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ResourceType: string;
  FeatureType: string;
}

interface FloatAttributes {
  ResourceType?: string;
  FeatureType?: string;
}

const ResourceValidFeatures: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Resource_ValidFeatures'
);

export { ResourceValidFeatures };
