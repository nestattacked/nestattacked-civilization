interface FixLeaderTraitsAttributes {
  LeaderType: string;
  TraitType: string;
}

interface FloatLeaderTraitsAttributes {
  LeaderType?: string;
  TraitType?: string;
}

export function createLeaderTraits(attributes: FixLeaderTraitsAttributes): void;
