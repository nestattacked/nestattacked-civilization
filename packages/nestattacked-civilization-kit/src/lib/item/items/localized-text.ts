import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  Tag: string;
  Language: string;
  Text: string;
}

interface FloatAttributes {
  Tag?: string;
  Language?: string;
  Text?: string;
}

const LocalizedText: ItemCreator<
  FixAttributes,
  FloatAttributes
> = new ItemCreator('LocalizedText');

export { LocalizedText };
