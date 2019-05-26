interface FixBuildingModifiersAttributes {
  BuildingType: string;
  ModifierId: string;
}

interface FloatBuildingModifiersAttributes {
  BuildingType?: string;
  ModifierId?: string;
}

export function createBuildingModifiers(attributes: FixBuildingModifiersAttributes): void;
