import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  BuildingType: string;
  FeatureType: string;
}

interface FloatAttributes {
  BuildingType?: string;
  FeatureType?: string;
}

const BuildingRequiredFeatures: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Building_RequiredFeatures'
);

export { BuildingRequiredFeatures };
