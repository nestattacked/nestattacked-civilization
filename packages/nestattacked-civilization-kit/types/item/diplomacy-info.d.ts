interface FixDiplomacyInfoAttributes {
  Type: string;
  BackgroundImage?: string;
}

interface FloatDiplomacyInfoAttributes {
  Type?: string;
  BackgroundImage?: string;
}

export function createDiplomacyInfo(attributes: FixDiplomacyInfoAttributes): void;
