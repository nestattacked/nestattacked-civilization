interface FixModifierStringsAttributes {
  ModifierId: string;
  Context: string;
  Text: string;
}

interface FloatModifierStringsAttributes {
  ModifierId?: string;
  Context?: string;
  Text?: string;
}

export function createModifierStrings(attributes: FixModifierStringsAttributes): void;
