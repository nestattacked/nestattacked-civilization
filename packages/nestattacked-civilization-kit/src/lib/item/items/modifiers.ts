import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ModifierId: string;
  ModifierType: string;
  RunOnce?: boolean;
  NewOnly?: boolean;
  Permanent?: boolean;
  OwnerRequirementSetId?: string;
  SubjectRequirementSetId?: string;
  OwnerStackLimit?: number;
  SubjectStackLimit?: number;
}

interface FloatAttributes {
  ModifierId?: string;
  ModifierType?: string;
  RunOnce?: boolean;
  NewOnly?: boolean;
  Permanent?: boolean;
  OwnerRequirementSetId?: string;
  SubjectRequirementSetId?: string;
  OwnerStackLimit?: number;
  SubjectStackLimit?: number;
}

const Modifiers: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Modifiers'
);

export { Modifiers };
