import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  CivilizationType: string;
  TerrainType: string;
  Tier?: number;
}

interface FloatAttributes {
  CivilizationType?: string;
  TerrainType?: string;
  Tier?: number;
}

const StartBiasTerrains: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'StartBiasTerrains'
);

export { StartBiasTerrains };
