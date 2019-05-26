interface FixDuplicateCivilizationsAttributes {
  CivilizationType: string;
  OtherCivilizationType: string;
}

interface FloatDuplicateCivilizationsAttributes {
  CivilizationType?: string;
  OtherCivilizationType?: string;
}

export function createDuplicateCivilizations(attributes: FixDuplicateCivilizationsAttributes): void;
