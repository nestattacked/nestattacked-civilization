import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ImprovementType: string;
  YieldChangeId: string;
}

interface FloatAttributes {
  ImprovementType?: string;
  YieldChangeId?: string;
}

const ImprovementAdjacencies: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Improvement_Adjacencies'
);

export { ImprovementAdjacencies };
