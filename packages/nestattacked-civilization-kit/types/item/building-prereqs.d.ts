interface FixBuildingPrereqsAttributes {
  Building: string;
  PrereqBuilding: string;
}

interface FloatBuildingPrereqsAttributes {
  Building?: string;
  PrereqBuilding?: string;
}

export function createBuildingPrereqs(attributes: FixBuildingPrereqsAttributes): void;
