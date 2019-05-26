interface FixTerrainClassTerrainsAttributes {
  TerrainClassType: string;
  TerrainType: string;
}

interface FloatTerrainClassTerrainsAttributes {
  TerrainClassType?: string;
  TerrainType?: string;
}

export function createTerrainClassTerrains(attributes: FixTerrainClassTerrainsAttributes): void;
