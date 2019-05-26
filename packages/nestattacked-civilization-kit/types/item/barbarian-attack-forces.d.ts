interface FixBarbarianAttackForcesAttributes {
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

interface FloatBarbarianAttackForcesAttributes {
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

export function createBarbarianAttackForces(attributes: FixBarbarianAttackForcesAttributes): void;
