interface FixBeliefClassesAttributes {
  BeliefClassType: string;
  Name: string;
  MaxInReligion?: number;
  AdoptionOrder?: number;
}

interface FloatBeliefClassesAttributes {
  BeliefClassType?: string;
  Name?: string;
  MaxInReligion?: number;
  AdoptionOrder?: number;
}

export function createBeliefClasses(attributes: FixBeliefClassesAttributes): void;
