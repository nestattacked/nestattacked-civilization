import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
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

interface FloatAttributes {
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

const BarbarianTribes: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'BarbarianTribes'
);

export { BarbarianTribes };
