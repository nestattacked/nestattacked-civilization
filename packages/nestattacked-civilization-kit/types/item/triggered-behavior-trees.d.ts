interface FixTriggeredBehaviorTreesAttributes {
  TriggerType: string;
  TreeName: string;
  OperationName?: string;
  AIEvent: string;
  Priority?: number;
}

interface FloatTriggeredBehaviorTreesAttributes {
  TriggerType?: string;
  TreeName?: string;
  OperationName?: string;
  AIEvent?: string;
  Priority?: number;
}

export function createTriggeredBehaviorTrees(attributes: FixTriggeredBehaviorTreesAttributes): void;
