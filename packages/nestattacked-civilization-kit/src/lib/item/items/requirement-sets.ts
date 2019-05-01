import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  RequirementSetId: string;
  RequirementSetType: string;
}

interface FloatAttributes {
  RequirementSetId?: string;
  RequirementSetType?: string;
}

const RequirementSets: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'RequirementSets'
);

export { RequirementSets };
