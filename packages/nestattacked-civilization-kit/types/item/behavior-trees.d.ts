interface FixBehaviorTreesAttributes {
  TreeName: string;
}

interface FloatBehaviorTreesAttributes {
  TreeName?: string;
}

export function createBehaviorTrees(attributes: FixBehaviorTreesAttributes): void;
