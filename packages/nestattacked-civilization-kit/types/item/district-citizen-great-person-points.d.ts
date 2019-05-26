interface FixDistrictCitizenGreatPersonPointsAttributes {
  DistrictType: string;
  GreatPersonClassType: string;
  PointsPerTurn?: number;
}

interface FloatDistrictCitizenGreatPersonPointsAttributes {
  DistrictType?: string;
  GreatPersonClassType?: string;
  PointsPerTurn?: number;
}

export function createDistrictCitizenGreatPersonPoints(attributes: FixDistrictCitizenGreatPersonPointsAttributes): void;
