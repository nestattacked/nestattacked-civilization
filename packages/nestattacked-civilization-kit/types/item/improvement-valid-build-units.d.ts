interface FixImprovementValidBuildUnitsAttributes {
  ImprovementType: string;
  UnitType: string;
}

interface FloatImprovementValidBuildUnitsAttributes {
  ImprovementType?: string;
  UnitType?: string;
}

export function createImprovementValidBuildUnits(attributes: FixImprovementValidBuildUnitsAttributes): void;
