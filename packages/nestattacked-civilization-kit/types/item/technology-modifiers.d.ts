interface FixTechnologyModifiersAttributes {
  TechnologyType: string;
  ModifierId: string;
}

interface FloatTechnologyModifiersAttributes {
  TechnologyType?: string;
  ModifierId?: string;
}

export function createTechnologyModifiers(attributes: FixTechnologyModifiersAttributes): void;
