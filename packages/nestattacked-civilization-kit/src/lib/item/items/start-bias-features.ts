import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  CivilizationType: string;
  FeatureType: string;
  Tier?: number;
}

interface FloatAttributes {
  CivilizationType?: string;
  FeatureType?: string;
  Tier?: number;
}

const StartBiasFeatures: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'StartBiasFeatures'
);

export { StartBiasFeatures };
