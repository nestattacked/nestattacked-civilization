import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  TraitType: string;
  YieldChangeId: string;
}

interface FloatAttributes {
  TraitType?: string;
  YieldChangeId?: string;
}

const ExcludedAdjacencies: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'ExcludedAdjacencies'
);

export { ExcludedAdjacencies };
