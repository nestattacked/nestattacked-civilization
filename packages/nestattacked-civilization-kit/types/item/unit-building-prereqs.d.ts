interface FixUnitBuildingPrereqsAttributes {
  Unit: string;
  PrereqBuilding: string;
  NumSupported?: number;
}

interface FloatUnitBuildingPrereqsAttributes {
  Unit?: string;
  PrereqBuilding?: string;
  NumSupported?: number;
}

export function createUnitBuildingPrereqs(attributes: FixUnitBuildingPrereqsAttributes): void;
