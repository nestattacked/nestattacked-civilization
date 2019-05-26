interface FixImprovementModifiersAttributes {
  ImprovementType: string;
  ModifierID: string;
}

interface FloatImprovementModifiersAttributes {
  ImprovementType?: string;
  ModifierID?: string;
}

export function createImprovementModifiers(attributes: FixImprovementModifiersAttributes): void;
