interface FixHistoricRankingsAttributes {
  HistoricLeader: string;
  Quote?: string;
  Score?: number;
}

interface FloatHistoricRankingsAttributes {
  HistoricLeader?: string;
  Quote?: string;
  Score?: number;
}

export function createHistoricRankings(attributes: FixHistoricRankingsAttributes): void;
