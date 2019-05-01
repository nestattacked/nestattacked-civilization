import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ListType: string;
  OperationType: string;
  BaseValue?: number;
  DeltaValue?: number;
}

interface FloatAttributes {
  ListType?: string;
  OperationType?: string;
  BaseValue?: number;
  DeltaValue?: number;
}

const AiOperationLimits: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'AiOperationLimits'
);

export { AiOperationLimits };
