import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  OperationType: string;
  Value: number;
}

interface FloatAttributes {
  OperationType?: string;
  Value?: number;
}

const AiOperationTypes: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'AiOperationTypes'
);

export { AiOperationTypes };
