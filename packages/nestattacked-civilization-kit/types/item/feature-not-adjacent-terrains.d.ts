interface FixFeatureNotAdjacentTerrainsAttributes {
  FeatureType: string;
  TerrainType: string;
}

interface FloatFeatureNotAdjacentTerrainsAttributes {
  FeatureType?: string;
  TerrainType?: string;
}

export function createFeatureNotAdjacentTerrains(attributes: FixFeatureNotAdjacentTerrainsAttributes): void;
