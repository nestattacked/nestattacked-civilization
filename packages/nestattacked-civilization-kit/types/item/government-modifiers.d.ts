interface FixGovernmentModifiersAttributes {
  GovernmentType: string;
  ModifierId: string;
}

interface FloatGovernmentModifiersAttributes {
  GovernmentType?: string;
  ModifierId?: string;
}

export function createGovernmentModifiers(attributes: FixGovernmentModifiersAttributes): void;
