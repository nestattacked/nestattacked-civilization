import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ImprovementType: string;
  TerrainType: string;
}

interface FloatAttributes {
  ImprovementType?: string;
  TerrainType?: string;
}

const ImprovementValidAdjacentTerrains: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Improvement_ValidAdjacentTerrains'
);

export { ImprovementValidAdjacentTerrains };
