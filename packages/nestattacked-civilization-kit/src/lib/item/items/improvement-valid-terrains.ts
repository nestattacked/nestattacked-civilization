import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ImprovementType: string;
  TerrainType: string;
  PrereqTech?: string;
  PrereqCivic?: string;
}

interface FloatAttributes {
  ImprovementType?: string;
  TerrainType?: string;
  PrereqTech?: string;
  PrereqCivic?: string;
}

const ImprovementValidTerrains: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Improvement_ValidTerrains'
);

export { ImprovementValidTerrains };
