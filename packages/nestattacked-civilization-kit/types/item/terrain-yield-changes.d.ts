interface FixTerrainYieldChangesAttributes {
  TerrainType: string;
  YieldType: string;
  YieldChange: number;
}

interface FloatTerrainYieldChangesAttributes {
  TerrainType?: string;
  YieldType?: string;
  YieldChange?: number;
}

export function createTerrainYieldChanges(attributes: FixTerrainYieldChangesAttributes): void;
