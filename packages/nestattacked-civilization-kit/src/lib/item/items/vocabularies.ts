import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  Vocabulary: string;
}

interface FloatAttributes {
  Vocabulary?: string;
}

const Vocabularies: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Vocabularies'
);

export { Vocabularies };
