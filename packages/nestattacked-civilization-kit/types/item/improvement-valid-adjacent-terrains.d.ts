interface FixImprovementValidAdjacentTerrainsAttributes {
  ImprovementType: string;
  TerrainType: string;
}

interface FloatImprovementValidAdjacentTerrainsAttributes {
  ImprovementType?: string;
  TerrainType?: string;
}

export function createImprovementValidAdjacentTerrains(attributes: FixImprovementValidAdjacentTerrainsAttributes): void;
