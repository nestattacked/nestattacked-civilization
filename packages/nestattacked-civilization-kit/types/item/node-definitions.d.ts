interface FixNodeDefinitionsAttributes {
  NodeType: string;
  NodeId: number;
  ShapeId: number;
  Description: string;
}

interface FloatNodeDefinitionsAttributes {
  NodeType?: string;
  NodeId?: number;
  ShapeId?: number;
  Description?: string;
}

export function createNodeDefinitions(attributes: FixNodeDefinitionsAttributes): void;
