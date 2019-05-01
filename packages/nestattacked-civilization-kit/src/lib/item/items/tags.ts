import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  Tag: string;
  Vocabulary: string;
}

interface FloatAttributes {
  Tag?: string;
  Vocabulary?: string;
}

const Tags: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Tags'
);

export { Tags };
