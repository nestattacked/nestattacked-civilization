interface FixErasAttributes {
  EraType: string;
  Name: string;
  Description?: string;
  ChronologyIndex: number;
  WarmongerPoints?: number;
  GreatPersonBaseCost: number;
  EraTechBackgroundTexture?: string;
  EraCivicBackgroundTexture?: string;
  WarmongerLevelDescription?: string;
  EmbarkedUnitStrength: number;
  EraTechBackgroundTextureOffsetX?: number;
  EraCivicBackgroundTextureOffsetX?: number;
  TechTreeLayoutMethod?: number;
}

interface FloatErasAttributes {
  EraType?: string;
  Name?: string;
  Description?: string;
  ChronologyIndex?: number;
  WarmongerPoints?: number;
  GreatPersonBaseCost?: number;
  EraTechBackgroundTexture?: string;
  EraCivicBackgroundTexture?: string;
  WarmongerLevelDescription?: string;
  EmbarkedUnitStrength?: number;
  EraTechBackgroundTextureOffsetX?: number;
  EraCivicBackgroundTextureOffsetX?: number;
  TechTreeLayoutMethod?: number;
}

export function createEras(attributes: FixErasAttributes): void;
