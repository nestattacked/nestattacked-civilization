interface FixLeaderQuotesAttributes {
  LeaderType: string;
  Quote: string;
  QuoteAudio?: string;
}

interface FloatLeaderQuotesAttributes {
  LeaderType?: string;
  Quote?: string;
  QuoteAudio?: string;
}

export function createLeaderQuotes(attributes: FixLeaderQuotesAttributes): void;
