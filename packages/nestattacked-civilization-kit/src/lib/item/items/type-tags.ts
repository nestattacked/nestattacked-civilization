import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  Type: string;
  Tag: string;
}

interface FloatAttributes {
  Type?: string;
  Tag?: string;
}

const TypeTags: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'TypeTags'
);

export { TypeTags };
