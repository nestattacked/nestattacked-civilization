import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
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

interface FloatAttributes {
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

const AiOperationDefs: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'AiOperationDefs'
);

export { AiOperationDefs };
