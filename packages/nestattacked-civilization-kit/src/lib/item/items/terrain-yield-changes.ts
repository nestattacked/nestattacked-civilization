import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  TerrainType: string;
  YieldType: string;
  YieldChange: number;
}

interface FloatAttributes {
  TerrainType?: string;
  YieldType?: string;
  YieldChange?: number;
}

const TerrainYieldChanges: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Terrain_YieldChanges'
);

export { TerrainYieldChanges };
