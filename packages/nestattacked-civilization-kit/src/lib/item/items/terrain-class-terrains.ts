import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  TerrainClassType: string;
  TerrainType: string;
}

interface FloatAttributes {
  TerrainClassType?: string;
  TerrainType?: string;
}

const TerrainClassTerrains: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'TerrainClass_Terrains'
);

export { TerrainClassTerrains };
