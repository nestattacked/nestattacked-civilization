interface FixTraitModifiersAttributes {
  TraitType: string;
  ModifierId: string;
}

interface FloatTraitModifiersAttributes {
  TraitType?: string;
  ModifierId?: string;
}

export function createTraitModifiers(attributes: FixTraitModifiersAttributes): void;
