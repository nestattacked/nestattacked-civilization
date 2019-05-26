interface FixDistrictGreatPersonPointsAttributes {
  DistrictType: string;
  GreatPersonClassType: string;
  PointsPerTurn?: number;
}

interface FloatDistrictGreatPersonPointsAttributes {
  DistrictType?: string;
  GreatPersonClassType?: string;
  PointsPerTurn?: number;
}

export function createDistrictGreatPersonPoints(attributes: FixDistrictGreatPersonPointsAttributes): void;
