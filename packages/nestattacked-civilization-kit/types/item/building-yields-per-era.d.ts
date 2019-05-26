interface FixBuildingYieldsPerEraAttributes {
  BuildingType: string;
  YieldType: string;
  YieldChange?: number;
}

interface FloatBuildingYieldsPerEraAttributes {
  BuildingType?: string;
  YieldType?: string;
  YieldChange?: number;
}

export function createBuildingYieldsPerEra(attributes: FixBuildingYieldsPerEraAttributes): void;
