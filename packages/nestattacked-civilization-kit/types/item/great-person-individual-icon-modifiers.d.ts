interface FixGreatPersonIndividualIconModifiersAttributes {
  GreatPersonIndividualType: string;
  OverrideUnitIcon: string;
}

interface FloatGreatPersonIndividualIconModifiersAttributes {
  GreatPersonIndividualType?: string;
  OverrideUnitIcon?: string;
}

export function createGreatPersonIndividualIconModifiers(attributes: FixGreatPersonIndividualIconModifiersAttributes): void;
