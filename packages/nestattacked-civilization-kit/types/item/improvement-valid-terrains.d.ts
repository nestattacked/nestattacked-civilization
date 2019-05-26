interface FixImprovementValidTerrainsAttributes {
  ImprovementType: string;
  TerrainType: string;
  PrereqTech?: string;
  PrereqCivic?: string;
}

interface FloatImprovementValidTerrainsAttributes {
  ImprovementType?: string;
  TerrainType?: string;
  PrereqTech?: string;
  PrereqCivic?: string;
}

export function createImprovementValidTerrains(attributes: FixImprovementValidTerrainsAttributes): void;
