import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  GoodyHutType: string;
  ImprovementType?: string;
  Weight: number;
}

interface FloatAttributes {
  GoodyHutType?: string;
  ImprovementType?: string;
  Weight?: number;
}

const GoodyHuts: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'GoodyHuts'
);

export { GoodyHuts };
