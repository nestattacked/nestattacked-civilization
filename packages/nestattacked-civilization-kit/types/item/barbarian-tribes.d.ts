interface FixBarbarianTribesAttributes {
  TribeType: string;
  IsCoastal?: boolean;
  RequiredResource?: string;
  ResourceRange?: number;
  PercentRangedUnits?: number;
  TurnsToWarriorSpawn?: number;
  ScoutTag: string;
  MeleeTag: string;
  RangedTag: string;
  SiegeTag: string;
  DefenderTag: string;
  SupportTag?: string;
  ScoutingBehaviorTree: string;
  RaidingBehaviorTree: string;
  RaidingBoldness?: number;
  CityAttackOperation: string;
  CityAttackBoldness?: number;
}

interface FloatBarbarianTribesAttributes {
  TribeType?: string;
  IsCoastal?: boolean;
  RequiredResource?: string;
  ResourceRange?: number;
  PercentRangedUnits?: number;
  TurnsToWarriorSpawn?: number;
  ScoutTag?: string;
  MeleeTag?: string;
  RangedTag?: string;
  SiegeTag?: string;
  DefenderTag?: string;
  SupportTag?: string;
  ScoutingBehaviorTree?: string;
  RaidingBehaviorTree?: string;
  RaidingBoldness?: number;
  CityAttackOperation?: string;
  CityAttackBoldness?: number;
}

export function createBarbarianTribes(attributes: FixBarbarianTribesAttributes): void;
