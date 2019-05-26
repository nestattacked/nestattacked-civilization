interface FixCivilizationsAttributes {
  CivilizationType: string;
  Name: string;
  Description?: string;
  Adjective: string;
  RandomCityNameDepth?: number;
  StartingCivilizationLevelType: string;
  Ethnicity?: string;
}

interface FloatCivilizationsAttributes {
  CivilizationType?: string;
  Name?: string;
  Description?: string;
  Adjective?: string;
  RandomCityNameDepth?: number;
  StartingCivilizationLevelType?: string;
  Ethnicity?: string;
}

export function createCivilizations(attributes: FixCivilizationsAttributes): void;
