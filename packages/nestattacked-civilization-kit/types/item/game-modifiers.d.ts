interface FixGameModifiersAttributes {
  ModifierId: string;
}

interface FloatGameModifiersAttributes {
  ModifierId?: string;
}

export function createGameModifiers(attributes: FixGameModifiersAttributes): void;
