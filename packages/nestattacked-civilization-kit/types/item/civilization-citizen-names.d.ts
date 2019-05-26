interface FixCivilizationCitizenNamesAttributes {
  CivilizationType: string;
  CitizenName: string;
  Female?: boolean;
  Modern?: boolean;
}

interface FloatCivilizationCitizenNamesAttributes {
  CivilizationType?: string;
  CitizenName?: string;
  Female?: boolean;
  Modern?: boolean;
}

export function createCivilizationCitizenNames(attributes: FixCivilizationCitizenNamesAttributes): void;
