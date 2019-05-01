import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  RequirementSetId: string;
  RequirementId: string;
}

interface FloatAttributes {
  RequirementSetId?: string;
  RequirementId?: string;
}

const RequirementSetRequirements: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'RequirementSetRequirements'
);

export { RequirementSetRequirements };
