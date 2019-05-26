interface FixBuildingYieldChangesAttributes {
  BuildingType: string;
  YieldType: string;
  YieldChange: number;
}

interface FloatBuildingYieldChangesAttributes {
  BuildingType?: string;
  YieldType?: string;
  YieldChange?: number;
}

export function createBuildingYieldChanges(attributes: FixBuildingYieldChangesAttributes): void;
