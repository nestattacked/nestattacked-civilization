import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  CivicType: string;
  Quote: string;
  QuoteAudio?: string;
}

interface FloatAttributes {
  CivicType?: string;
  Quote?: string;
  QuoteAudio?: string;
}

const CivicQuotes: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'CivicQuotes'
);

export { CivicQuotes };
