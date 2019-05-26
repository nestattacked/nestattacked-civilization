interface FixAdjacencyYieldChangesAttributes {
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

interface FloatAdjacencyYieldChangesAttributes {
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

export function createAdjacencyYieldChanges(attributes: FixAdjacencyYieldChangesAttributes): void;
