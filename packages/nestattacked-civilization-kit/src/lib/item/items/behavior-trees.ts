import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  TreeName: string;
}

interface FloatAttributes {
  TreeName?: string;
}

const BehaviorTrees: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'BehaviorTrees'
);

export { BehaviorTrees };
