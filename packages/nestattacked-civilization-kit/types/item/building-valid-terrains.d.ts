interface FixBuildingValidTerrainsAttributes {
  BuildingType: string;
  TerrainType: string;
}

interface FloatBuildingValidTerrainsAttributes {
  BuildingType?: string;
  TerrainType?: string;
}

export function createBuildingValidTerrains(attributes: FixBuildingValidTerrainsAttributes): void;
