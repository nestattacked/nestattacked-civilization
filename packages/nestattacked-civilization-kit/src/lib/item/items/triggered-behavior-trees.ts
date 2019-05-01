import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  TriggerType: string;
  TreeName: string;
  OperationName?: string;
  AIEvent: string;
  Priority?: number;
}

interface FloatAttributes {
  TriggerType?: string;
  TreeName?: string;
  OperationName?: string;
  AIEvent?: string;
  Priority?: number;
}

const TriggeredBehaviorTrees: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'TriggeredBehaviorTrees'
);

export { TriggeredBehaviorTrees };
