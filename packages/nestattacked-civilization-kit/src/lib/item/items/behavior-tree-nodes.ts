import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  TreeName: string;
  NodeId: number;
  JumpTo?: number;
  NodeType: string;
  PrimaryKey: number;
}

interface FloatAttributes {
  TreeName?: string;
  NodeId?: number;
  JumpTo?: number;
  NodeType?: string;
  PrimaryKey?: number;
}

const BehaviorTreeNodes: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'BehaviorTreeNodes'
);

export { BehaviorTreeNodes };
