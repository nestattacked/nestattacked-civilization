interface FixDistrictReplacesAttributes {
  CivUniqueDistrictType: string;
  ReplacesDistrictType: string;
}

interface FloatDistrictReplacesAttributes {
  CivUniqueDistrictType?: string;
  ReplacesDistrictType?: string;
}

export function createDistrictReplaces(attributes: FixDistrictReplacesAttributes): void;
