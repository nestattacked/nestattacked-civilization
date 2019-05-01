import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ConditionType: string;
  Value: number;
}

interface FloatAttributes {
  ConditionType?: string;
  Value?: number;
}

const PlotEvalConditions: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'PlotEvalConditions'
);

export { PlotEvalConditions };
