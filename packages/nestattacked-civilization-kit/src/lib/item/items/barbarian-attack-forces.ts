import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  AttackForceType: string;
  MinTargetDifficulty?: string;
  MaxTargetDifficulty?: string;
  SpawnRate?: number;
  MeleeTag?: string;
  NumMeleeUnits?: number;
  RangeTag?: string;
  NumRangeUnits?: number;
  SiegeTag?: string;
  NumSiegeUnits?: number;
  SupportTag?: string;
  NumSupportUnits?: number;
  RaidingForce?: boolean;
}

interface FloatAttributes {
  AttackForceType?: string;
  MinTargetDifficulty?: string;
  MaxTargetDifficulty?: string;
  SpawnRate?: number;
  MeleeTag?: string;
  NumMeleeUnits?: number;
  RangeTag?: string;
  NumRangeUnits?: number;
  SiegeTag?: string;
  NumSiegeUnits?: number;
  SupportTag?: string;
  NumSupportUnits?: number;
  RaidingForce?: boolean;
}

const BarbarianAttackForces: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'BarbarianAttackForces'
);

export { BarbarianAttackForces };
