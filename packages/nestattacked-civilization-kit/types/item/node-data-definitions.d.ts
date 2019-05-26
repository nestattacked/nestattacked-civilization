interface FixNodeDataDefinitionsAttributes {
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

interface FloatNodeDataDefinitionsAttributes {
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

export function createNodeDataDefinitions(attributes: FixNodeDataDefinitionsAttributes): void;
