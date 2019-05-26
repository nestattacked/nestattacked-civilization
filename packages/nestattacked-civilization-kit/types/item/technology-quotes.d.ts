interface FixTechnologyQuotesAttributes {
  TechnologyType: string;
  Quote: string;
  QuoteAudio?: string;
}

interface FloatTechnologyQuotesAttributes {
  TechnologyType?: string;
  Quote?: string;
  QuoteAudio?: string;
}

export function createTechnologyQuotes(attributes: FixTechnologyQuotesAttributes): void;
