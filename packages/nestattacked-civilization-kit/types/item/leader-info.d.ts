interface FixLeaderInfoAttributes {
  LeaderType: string;
  Header: string;
  Caption: string;
  SortIndex?: number;
}

interface FloatLeaderInfoAttributes {
  LeaderType?: string;
  Header?: string;
  Caption?: string;
  SortIndex?: number;
}

export function createLeaderInfo(attributes: FixLeaderInfoAttributes): void;
