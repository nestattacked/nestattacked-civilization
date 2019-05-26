interface FixBoostHandlersAttributes {
  HandlerId: string;
  TechBoostType: string;
  BehaviorTree?: string;
  OperationName?: string;
  LuaScript?: string;
  UniquenessTag?: string;
  WinnowFunction?: string;
}

interface FloatBoostHandlersAttributes {
  HandlerId?: string;
  TechBoostType?: string;
  BehaviorTree?: string;
  OperationName?: string;
  LuaScript?: string;
  UniquenessTag?: string;
  WinnowFunction?: string;
}

export function createBoostHandlers(attributes: FixBoostHandlersAttributes): void;
