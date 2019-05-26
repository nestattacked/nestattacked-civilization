interface FixFeatureValidTerrainsAttributes {
  FeatureType: string;
  TerrainType: string;
}

interface FloatFeatureValidTerrainsAttributes {
  FeatureType?: string;
  TerrainType?: string;
}

export function createFeatureValidTerrains(attributes: FixFeatureValidTerrainsAttributes): void;
