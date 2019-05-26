interface FixSeasonsAttributes {
  SeasonType: string;
  Description: string;
}

interface FloatSeasonsAttributes {
  SeasonType?: string;
  Description?: string;
}

export function createSeasons(attributes: FixSeasonsAttributes): void;
