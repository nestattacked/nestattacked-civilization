interface FixDuplicateLeadersAttributes {
  LeaderType: string;
  OtherLeaderType: string;
}

interface FloatDuplicateLeadersAttributes {
  LeaderType?: string;
  OtherLeaderType?: string;
}

export function createDuplicateLeaders(attributes: FixDuplicateLeadersAttributes): void;
