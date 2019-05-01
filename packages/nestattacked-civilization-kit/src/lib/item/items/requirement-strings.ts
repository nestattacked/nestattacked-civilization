import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  RequirementId: string;
  Context: string;
  Text: string;
}

interface FloatAttributes {
  RequirementId?: string;
  Context?: string;
  Text?: string;
}

const RequirementStrings: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'RequirementStrings'
);

export { RequirementStrings };
