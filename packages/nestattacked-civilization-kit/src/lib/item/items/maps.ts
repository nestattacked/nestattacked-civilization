import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
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

interface FloatAttributes {
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

const Maps: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Maps'
);

export { Maps };
