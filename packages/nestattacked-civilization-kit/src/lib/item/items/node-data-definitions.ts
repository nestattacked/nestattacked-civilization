import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  DataName: string;
  DefnId: number;
  DataType: string;
  NodeType: string;
  Required?: boolean;
  RequiredGroup?: boolean;
  Output?: boolean;
  Modified?: boolean;
  UserData?: boolean;
  Automatic?: boolean;
  Tagged?: boolean;
  EnumList?: string;
  UniqueId: number;
}

interface FloatAttributes {
  DataName?: string;
  DefnId?: number;
  DataType?: string;
  NodeType?: string;
  Required?: boolean;
  RequiredGroup?: boolean;
  Output?: boolean;
  Modified?: boolean;
  UserData?: boolean;
  Automatic?: boolean;
  Tagged?: boolean;
  EnumList?: string;
  UniqueId?: number;
}

const NodeDataDefinitions: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'NodeDataDefinitions'
);

export { NodeDataDefinitions };
