interface FixDistrictValidTerrainsAttributes {
  DistrictType: string;
  TerrainType: string;
}

interface FloatDistrictValidTerrainsAttributes {
  DistrictType?: string;
  TerrainType?: string;
}

export function createDistrictValidTerrains(attributes: FixDistrictValidTerrainsAttributes): void;
