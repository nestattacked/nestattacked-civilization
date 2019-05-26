interface FixCivicQuotesAttributes {
  CivicType: string;
  Quote: string;
  QuoteAudio?: string;
}

interface FloatCivicQuotesAttributes {
  CivicType?: string;
  Quote?: string;
  QuoteAudio?: string;
}

export function createCivicQuotes(attributes: FixCivicQuotesAttributes): void;
