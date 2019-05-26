interface FixBuildingGreatPersonPointsAttributes {
  BuildingType: string;
  GreatPersonClassType: string;
  PointsPerTurn?: number;
}

interface FloatBuildingGreatPersonPointsAttributes {
  BuildingType?: string;
  GreatPersonClassType?: string;
  PointsPerTurn?: number;
}

export function createBuildingGreatPersonPoints(attributes: FixBuildingGreatPersonPointsAttributes): void;
