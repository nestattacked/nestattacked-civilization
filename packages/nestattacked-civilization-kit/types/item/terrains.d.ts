interface FixTerrainsAttributes {
  TerrainType: string;
  Name: string;
  Mountain?: boolean;
  Hills?: boolean;
  Water?: boolean;
  InfluenceCost: number;
  MovementCost: number;
  ShallowWater?: boolean;
  SightModifier?: number;
  SightThroughModifier?: number;
  Impassable?: boolean;
  DefenseModifier?: number;
  Appeal?: number;
  AntiquityPriority?: number;
}

interface FloatTerrainsAttributes {
  TerrainType?: string;
  Name?: string;
  Mountain?: boolean;
  Hills?: boolean;
  Water?: boolean;
  InfluenceCost?: number;
  MovementCost?: number;
  ShallowWater?: boolean;
  SightModifier?: number;
  SightThroughModifier?: number;
  Impassable?: boolean;
  DefenseModifier?: number;
  Appeal?: number;
  AntiquityPriority?: number;
}

export function createTerrains(attributes: FixTerrainsAttributes): void;
