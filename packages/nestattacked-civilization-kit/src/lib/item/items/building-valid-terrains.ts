import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  BuildingType: string;
  TerrainType: string;
}

interface FloatAttributes {
  BuildingType?: string;
  TerrainType?: string;
}

const BuildingValidTerrains: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Building_ValidTerrains'
);

export { BuildingValidTerrains };
