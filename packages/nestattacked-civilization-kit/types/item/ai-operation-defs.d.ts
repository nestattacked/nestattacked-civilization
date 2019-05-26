interface FixAiOperationDefsAttributes {
  OperationName: string;
  TargetType: string;
  TargetParameter?: number;
  EnemyType?: string;
  BehaviorTree?: string;
  Priority?: number;
  MaxTargetDistInRegion?: number;
  MaxTargetDistInArea?: number;
  MaxTargetDistInWorld?: number;
  MaxTargetStrength?: number;
  MaxTargetDefense?: number;
  MinOddsOfSuccess?: number;
  SelfStart?: boolean;
  MustBeAtWar?: boolean;
  MustHaveNukes?: boolean;
  MustHaveUnits?: number;
  OperationType?: string;
  AllowTargetUpdate?: boolean;
}

interface FloatAiOperationDefsAttributes {
  OperationName?: string;
  TargetType?: string;
  TargetParameter?: number;
  EnemyType?: string;
  BehaviorTree?: string;
  Priority?: number;
  MaxTargetDistInRegion?: number;
  MaxTargetDistInArea?: number;
  MaxTargetDistInWorld?: number;
  MaxTargetStrength?: number;
  MaxTargetDefense?: number;
  MinOddsOfSuccess?: number;
  SelfStart?: boolean;
  MustBeAtWar?: boolean;
  MustHaveNukes?: boolean;
  MustHaveUnits?: number;
  OperationType?: string;
  AllowTargetUpdate?: boolean;
}

export function createAiOperationDefs(attributes: FixAiOperationDefsAttributes): void;
