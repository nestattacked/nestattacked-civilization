import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  BuildingType: string;
  FeatureType: string;
}

interface FloatAttributes {
  BuildingType?: string;
  FeatureType?: string;
}

const BuildingValidFeatures: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Building_ValidFeatures'
);

export { BuildingValidFeatures };
