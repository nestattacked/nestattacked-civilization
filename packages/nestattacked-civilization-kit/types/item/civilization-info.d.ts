interface FixCivilizationInfoAttributes {
  CivilizationType: string;
  Header: string;
  Caption: string;
  SortIndex?: number;
}

interface FloatCivilizationInfoAttributes {
  CivilizationType?: string;
  Header?: string;
  Caption?: string;
  SortIndex?: number;
}

export function createCivilizationInfo(attributes: FixCivilizationInfoAttributes): void;
