interface FixBeliefModifiersAttributes {
  BeliefType: string;
  ModifierID: string;
}

interface FloatBeliefModifiersAttributes {
  BeliefType?: string;
  ModifierID?: string;
}

export function createBeliefModifiers(attributes: FixBeliefModifiersAttributes): void;
