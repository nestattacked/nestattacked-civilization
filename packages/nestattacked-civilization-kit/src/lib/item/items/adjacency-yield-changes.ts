import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ID: string;
  Description: string;
  YieldType: string;
  YieldChange?: number;
  TilesRequired?: number;
  OtherDistrictAdjacent?: boolean;
  AdjacentSeaResource?: boolean;
  AdjacentTerrain?: string;
  AdjacentFeature?: string;
  AdjacentRiver?: boolean;
  AdjacentWonder?: boolean;
  AdjacentNaturalWonder?: boolean;
  AdjacentImprovement?: string;
  AdjacentDistrict?: string;
  PrereqCivic?: string;
  PrereqTech?: string;
  ObsoleteCivic?: string;
  ObsoleteTech?: string;
  AdjacentResource?: boolean;
  AdjacentResourceClass?: string;
  Self?: boolean;
}

interface FloatAttributes {
  ID?: string;
  Description?: string;
  YieldType?: string;
  YieldChange?: number;
  TilesRequired?: number;
  OtherDistrictAdjacent?: boolean;
  AdjacentSeaResource?: boolean;
  AdjacentTerrain?: string;
  AdjacentFeature?: string;
  AdjacentRiver?: boolean;
  AdjacentWonder?: boolean;
  AdjacentNaturalWonder?: boolean;
  AdjacentImprovement?: string;
  AdjacentDistrict?: string;
  PrereqCivic?: string;
  PrereqTech?: string;
  ObsoleteCivic?: string;
  ObsoleteTech?: string;
  AdjacentResource?: boolean;
  AdjacentResourceClass?: string;
  Self?: boolean;
}

const AdjacencyYieldChanges: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Adjacency_YieldChanges'
);

export { AdjacencyYieldChanges };
