import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ListType: string;
  OperationDef: string;
  RemoveRef?: boolean;
}

interface FloatAttributes {
  ListType?: string;
  OperationDef?: string;
  RemoveRef?: boolean;
}

const AllowedOperations: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'AllowedOperations'
);

export { AllowedOperations };
