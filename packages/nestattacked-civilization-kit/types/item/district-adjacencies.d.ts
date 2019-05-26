interface FixDistrictAdjacenciesAttributes {
  DistrictType: string;
  YieldChangeId: string;
}

interface FloatDistrictAdjacenciesAttributes {
  DistrictType?: string;
  YieldChangeId?: string;
}

export function createDistrictAdjacencies(attributes: FixDistrictAdjacenciesAttributes): void;
