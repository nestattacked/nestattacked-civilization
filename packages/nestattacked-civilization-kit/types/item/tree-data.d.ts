interface FixTreeDataAttributes {
  DefnId: number;
  NodeId: number;
  TreeName: string;
  Tag?: string;
  DefaultData?: string;
  ParentTag?: string;
  UniqueId: number;
}

interface FloatTreeDataAttributes {
  DefnId?: number;
  NodeId?: number;
  TreeName?: string;
  Tag?: string;
  DefaultData?: string;
  ParentTag?: string;
  UniqueId?: number;
}

export function createTreeData(attributes: FixTreeDataAttributes): void;
