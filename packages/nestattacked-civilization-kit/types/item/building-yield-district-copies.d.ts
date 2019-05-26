interface FixBuildingYieldDistrictCopiesAttributes {
  BuildingType: string;
  OldYieldType: string;
  NewYieldType: string;
}

interface FloatBuildingYieldDistrictCopiesAttributes {
  BuildingType?: string;
  OldYieldType?: string;
  NewYieldType?: string;
}

export function createBuildingYieldDistrictCopies(attributes: FixBuildingYieldDistrictCopiesAttributes): void;
