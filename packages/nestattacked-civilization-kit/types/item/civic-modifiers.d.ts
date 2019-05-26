interface FixCivicModifiersAttributes {
  CivicType: string;
  ModifierId: string;
}

interface FloatCivicModifiersAttributes {
  CivicType?: string;
  ModifierId?: string;
}

export function createCivicModifiers(attributes: FixCivicModifiersAttributes): void;
