interface FixResourceValidTerrainsAttributes {
  ResourceType: string;
  TerrainType: string;
}

interface FloatResourceValidTerrainsAttributes {
  ResourceType?: string;
  TerrainType?: string;
}

export function createResourceValidTerrains(attributes: FixResourceValidTerrainsAttributes): void;
