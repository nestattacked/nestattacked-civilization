interface FixStartBiasTerrainsAttributes {
  CivilizationType: string;
  TerrainType: string;
  Tier?: number;
}

interface FloatStartBiasTerrainsAttributes {
  CivilizationType?: string;
  TerrainType?: string;
  Tier?: number;
}

export function createStartBiasTerrains(attributes: FixStartBiasTerrainsAttributes): void;
