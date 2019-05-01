import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  NodeType: string;
  NodeId: number;
  ShapeId: number;
  Description: string;
}

interface FloatAttributes {
  NodeType?: string;
  NodeId?: number;
  ShapeId?: number;
  Description?: string;
}

const NodeDefinitions: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'NodeDefinitions'
);

export { NodeDefinitions };
