import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ImprovementType: string;
  Name: string;
  BarbarianCamp?: boolean;
  PrereqTech?: string;
  PrereqCivic?: string;
  Buildable?: boolean;
  Description?: string;
  RemoveOnEntry?: boolean;
  DispersalGold?: number;
  PlunderType: string;
  PlunderAmount?: number;
  Goody?: boolean;
  TilesPerGoody?: number;
  GoodyRange?: number;
  Icon: string;
  TraitType?: string;
  Housing?: number;
  TilesRequired?: number;
  SameAdjacentValid?: boolean;
  RequiresRiver?: number;
  EnforceTerrain?: boolean;
  BuildInLine?: boolean;
  CanBuildOutsideTerritory?: boolean;
  BuildOnFrontier?: boolean;
  AirSlots?: number;
  DefenseModifier?: number;
  GrantFortification?: number;
  MinimumAppeal?: number;
  Coast?: boolean;
  YieldFromAppeal?: string;
  WeaponSlots?: number;
  ReligiousUnitHealRate?: number;
  Appeal?: number;
  OnePerCity?: boolean;
  YieldFromAppealPercent?: number;
  ValidAdjacentTerrainAmount?: number;
  Domain?: string;
  AdjacentSeaResource?: boolean;
  RequiresAdjacentBonusOrLuxury?: boolean;
  MovementChange?: number;
  Workable?: boolean;
}

interface FloatAttributes {
  ImprovementType?: string;
  Name?: string;
  BarbarianCamp?: boolean;
  PrereqTech?: string;
  PrereqCivic?: string;
  Buildable?: boolean;
  Description?: string;
  RemoveOnEntry?: boolean;
  DispersalGold?: number;
  PlunderType?: string;
  PlunderAmount?: number;
  Goody?: boolean;
  TilesPerGoody?: number;
  GoodyRange?: number;
  Icon?: string;
  TraitType?: string;
  Housing?: number;
  TilesRequired?: number;
  SameAdjacentValid?: boolean;
  RequiresRiver?: number;
  EnforceTerrain?: boolean;
  BuildInLine?: boolean;
  CanBuildOutsideTerritory?: boolean;
  BuildOnFrontier?: boolean;
  AirSlots?: number;
  DefenseModifier?: number;
  GrantFortification?: number;
  MinimumAppeal?: number;
  Coast?: boolean;
  YieldFromAppeal?: string;
  WeaponSlots?: number;
  ReligiousUnitHealRate?: number;
  Appeal?: number;
  OnePerCity?: boolean;
  YieldFromAppealPercent?: number;
  ValidAdjacentTerrainAmount?: number;
  Domain?: string;
  AdjacentSeaResource?: boolean;
  RequiresAdjacentBonusOrLuxury?: boolean;
  MovementChange?: number;
  Workable?: boolean;
}

const Improvements: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Improvements'
);

export { Improvements };
