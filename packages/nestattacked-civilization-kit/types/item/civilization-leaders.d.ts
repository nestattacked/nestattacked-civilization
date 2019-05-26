interface FixCivilizationLeadersAttributes {
  LeaderType: string;
  CivilizationType: string;
  CapitalName: string;
}

interface FloatCivilizationLeadersAttributes {
  LeaderType?: string;
  CivilizationType?: string;
  CapitalName?: string;
}

export function createCivilizationLeaders(attributes: FixCivilizationLeadersAttributes): void;
