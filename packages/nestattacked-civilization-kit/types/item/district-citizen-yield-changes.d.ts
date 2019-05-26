interface FixDistrictCitizenYieldChangesAttributes {
  DistrictType: string;
  YieldType: string;
  YieldChange?: number;
}

interface FloatDistrictCitizenYieldChangesAttributes {
  DistrictType?: string;
  YieldType?: string;
  YieldChange?: number;
}

export function createDistrictCitizenYieldChanges(attributes: FixDistrictCitizenYieldChangesAttributes): void;
