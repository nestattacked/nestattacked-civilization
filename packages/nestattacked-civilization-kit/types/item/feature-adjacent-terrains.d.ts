interface FixFeatureAdjacentTerrainsAttributes {
  FeatureType: string;
  TerrainType: string;
}

interface FloatFeatureAdjacentTerrainsAttributes {
  FeatureType?: string;
  TerrainType?: string;
}

export function createFeatureAdjacentTerrains(attributes: FixFeatureAdjacentTerrainsAttributes): void;
