import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  Continents: number;
  Scarce: number;
  Average: number;
  Plentiful: number;
  PercentAdjusted: number;
}

interface FloatAttributes {
  Continents?: number;
  Scarce?: number;
  Average?: number;
  Plentiful?: number;
  PercentAdjusted?: number;
}

const ResourceDistribution: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Resource_Distribution'
);

export { ResourceDistribution };
