interface FixDynamicModifiersAttributes {
  ModifierType: string;
  CollectionType: string;
  EffectType: string;
}

interface FloatDynamicModifiersAttributes {
  ModifierType?: string;
  CollectionType?: string;
  EffectType?: string;
}

export function createDynamicModifiers(attributes: FixDynamicModifiersAttributes): void;
