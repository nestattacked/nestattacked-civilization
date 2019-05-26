interface FixBarbarianTribeForcesAttributes {
  AttackForceType: string;
  TribeType: string;
  SpecificTribeType: string;
}

interface FloatBarbarianTribeForcesAttributes {
  AttackForceType?: string;
  TribeType?: string;
  SpecificTribeType?: string;
}

export function createBarbarianTribeForces(attributes: FixBarbarianTribeForcesAttributes): void;
