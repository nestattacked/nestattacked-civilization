interface FixBuildingReplacesAttributes {
  CivUniqueBuildingType: string;
  ReplacesBuildingType: string;
}

interface FloatBuildingReplacesAttributes {
  CivUniqueBuildingType?: string;
  ReplacesBuildingType?: string;
}

export function createBuildingReplaces(attributes: FixBuildingReplacesAttributes): void;
