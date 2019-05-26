interface FixGreatPersonIndividualBirthModifiersAttributes {
  GreatPersonIndividualType: string;
  ModifierId: string;
}

interface FloatGreatPersonIndividualBirthModifiersAttributes {
  GreatPersonIndividualType?: string;
  ModifierId?: string;
}

export function createGreatPersonIndividualBirthModifiers(attributes: FixGreatPersonIndividualBirthModifiersAttributes): void;
