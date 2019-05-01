import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  RequirementId: string;
  Name: string;
  Type?: string;
  Value: string;
  Extra?: string;
  SecondExtra?: string;
}

interface FloatAttributes {
  RequirementId?: string;
  Name?: string;
  Type?: string;
  Value?: string;
  Extra?: string;
  SecondExtra?: string;
}

const RequirementArguments: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'RequirementArguments'
);

export { RequirementArguments };
