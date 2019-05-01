import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  DistrictType: string;
  TerrainType: string;
}

interface FloatAttributes {
  DistrictType?: string;
  TerrainType?: string;
}

const DistrictValidTerrains: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'District_ValidTerrains'
);

export { DistrictValidTerrains };
