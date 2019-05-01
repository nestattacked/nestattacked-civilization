import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  DefnId: number;
  NodeId: number;
  TreeName: string;
  Tag?: string;
  DefaultData?: string;
  ParentTag?: string;
  UniqueId: number;
}

interface FloatAttributes {
  DefnId?: number;
  NodeId?: number;
  TreeName?: string;
  Tag?: string;
  DefaultData?: string;
  ParentTag?: string;
  UniqueId?: number;
}

const TreeData: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'TreeData'
);

export { TreeData };
