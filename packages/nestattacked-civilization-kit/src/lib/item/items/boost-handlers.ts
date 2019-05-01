import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  HandlerId: string;
  TechBoostType: string;
  BehaviorTree?: string;
  OperationName?: string;
  LuaScript?: string;
  UniquenessTag?: string;
  WinnowFunction?: string;
}

interface FloatAttributes {
  HandlerId?: string;
  TechBoostType?: string;
  BehaviorTree?: string;
  OperationName?: string;
  LuaScript?: string;
  UniquenessTag?: string;
  WinnowFunction?: string;
}

const BoostHandlers: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'BoostHandlers'
);

export { BoostHandlers };
