interface FixMapsAttributes {
  MapSizeType: string;
  Name: string;
  Description?: string;
  DefaultPlayers?: number;
  FogTilesPerBarbarianCamp?: number;
  NumNaturalWonders?: number;
  UnitNameModifier?: number;
  TargetNumCities?: number;
  GridWidth?: number;
  GridHeight?: number;
  TerrainGrainChange?: number;
  FeatureGrainChange?: number;
  ResearchPercent?: number;
  NumCitiesUnhealthPercent?: number;
  NumCitiesPolicyCostMod?: number;
  NumCitiesTechCostMod?: number;
  EstimatedNumCities?: number;
  PlateValue?: number;
  Continents?: number;
}

interface FloatMapsAttributes {
  MapSizeType?: string;
  Name?: string;
  Description?: string;
  DefaultPlayers?: number;
  FogTilesPerBarbarianCamp?: number;
  NumNaturalWonders?: number;
  UnitNameModifier?: number;
  TargetNumCities?: number;
  GridWidth?: number;
  GridHeight?: number;
  TerrainGrainChange?: number;
  FeatureGrainChange?: number;
  ResearchPercent?: number;
  NumCitiesUnhealthPercent?: number;
  NumCitiesPolicyCostMod?: number;
  NumCitiesTechCostMod?: number;
  EstimatedNumCities?: number;
  PlateValue?: number;
  Continents?: number;
}

export function createMaps(attributes: FixMapsAttributes): void;
