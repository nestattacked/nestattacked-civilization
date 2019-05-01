import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  CivilizationType: string;
  ResourceType: string;
  Tier?: number;
}

interface FloatAttributes {
  CivilizationType?: string;
  ResourceType?: string;
  Tier?: number;
}

const StartBiasResources: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'StartBiasResources'
);

export { StartBiasResources };
