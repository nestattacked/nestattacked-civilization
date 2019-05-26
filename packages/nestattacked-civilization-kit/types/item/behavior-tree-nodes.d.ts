interface FixBehaviorTreeNodesAttributes {
  TreeName: string;
  NodeId: number;
  JumpTo?: number;
  NodeType: string;
  PrimaryKey: number;
}

interface FloatBehaviorTreeNodesAttributes {
  TreeName?: string;
  NodeId?: number;
  JumpTo?: number;
  NodeType?: string;
  PrimaryKey?: number;
}

export function createBehaviorTreeNodes(attributes: FixBehaviorTreeNodesAttributes): void;
