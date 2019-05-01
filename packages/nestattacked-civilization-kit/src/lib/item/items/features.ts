import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  FeatureType: string;
  Name: string;
  Description?: string;
  Quote?: string;
  Coast?: boolean;
  NoCoast?: boolean;
  NoRiver?: boolean;
  NoAdjacentFeatures?: boolean;
  RequiresRiver?: boolean;
  MovementChange?: number;
  SightThroughModifier?: number;
  Impassable?: boolean;
  NaturalWonder?: boolean;
  RemoveTech?: string;
  Removable?: boolean;
  AddCivic?: string;
  DefenseModifier?: number;
  AddsFreshWater?: boolean;
  Appeal?: number;
  MinDistanceLand?: number;
  MaxDistanceLand?: number;
  NotNearFeature?: boolean;
  Lake?: boolean;
  Tiles?: number;
  Adjacent?: boolean;
  NoResource?: boolean;
  DoubleAdjacentTerrainYield?: boolean;
  NotCliff?: boolean;
  MinDistanceNW?: number;
  CustomPlacement?: string;
  Forest?: boolean;
  AntiquityPriority?: number;
  QuoteAudio?: string;
  Settlement?: boolean;
  FollowRulesInWB?: boolean;
}

interface FloatAttributes {
  FeatureType?: string;
  Name?: string;
  Description?: string;
  Quote?: string;
  Coast?: boolean;
  NoCoast?: boolean;
  NoRiver?: boolean;
  NoAdjacentFeatures?: boolean;
  RequiresRiver?: boolean;
  MovementChange?: number;
  SightThroughModifier?: number;
  Impassable?: boolean;
  NaturalWonder?: boolean;
  RemoveTech?: string;
  Removable?: boolean;
  AddCivic?: string;
  DefenseModifier?: number;
  AddsFreshWater?: boolean;
  Appeal?: number;
  MinDistanceLand?: number;
  MaxDistanceLand?: number;
  NotNearFeature?: boolean;
  Lake?: boolean;
  Tiles?: number;
  Adjacent?: boolean;
  NoResource?: boolean;
  DoubleAdjacentTerrainYield?: boolean;
  NotCliff?: boolean;
  MinDistanceNW?: number;
  CustomPlacement?: string;
  Forest?: boolean;
  AntiquityPriority?: number;
  QuoteAudio?: string;
  Settlement?: boolean;
  FollowRulesInWB?: boolean;
}

const Features: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Features'
);

export { Features };
