import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  LeaderType: string;
  Quote: string;
  QuoteAudio?: string;
}

interface FloatAttributes {
  LeaderType?: string;
  Quote?: string;
  QuoteAudio?: string;
}

const LeaderQuotes: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'LeaderQuotes'
);

export { LeaderQuotes };
