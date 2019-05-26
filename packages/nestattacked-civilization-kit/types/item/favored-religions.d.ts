interface FixFavoredReligionsAttributes {
  LeaderType: string;
  CivilizationType: string;
  ReligionType: string;
}

interface FloatFavoredReligionsAttributes {
  LeaderType?: string;
  CivilizationType?: string;
  ReligionType?: string;
}

export function createFavoredReligions(attributes: FixFavoredReligionsAttributes): void;
