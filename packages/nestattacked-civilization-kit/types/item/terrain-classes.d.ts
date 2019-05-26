interface FixTerrainClassesAttributes {
  TerrainClassType: string;
  Name: string;
}

interface FloatTerrainClassesAttributes {
  TerrainClassType?: string;
  Name?: string;
}

export function createTerrainClasses(attributes: FixTerrainClassesAttributes): void;
