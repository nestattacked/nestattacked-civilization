import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  TechnologyType: string;
  Quote: string;
  QuoteAudio?: string;
}

interface FloatAttributes {
  TechnologyType?: string;
  Quote?: string;
  QuoteAudio?: string;
}

const TechnologyQuotes: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'TechnologyQuotes'
);

export { TechnologyQuotes };
