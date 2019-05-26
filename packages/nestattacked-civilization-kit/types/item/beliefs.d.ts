interface FixBeliefsAttributes {
  BeliefType: string;
  Name: string;
  Description: string;
  BeliefClassType: string;
}

interface FloatBeliefsAttributes {
  BeliefType?: string;
  Name?: string;
  Description?: string;
  BeliefClassType?: string;
}

export function createBeliefs(attributes: FixBeliefsAttributes): void;
