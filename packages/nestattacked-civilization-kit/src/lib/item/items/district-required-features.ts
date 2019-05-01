import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  DistrictType: string;
  FeatureType: string;
}

interface FloatAttributes {
  DistrictType?: string;
  FeatureType?: string;
}

const DistrictRequiredFeatures: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'District_RequiredFeatures'
);

export { DistrictRequiredFeatures };
