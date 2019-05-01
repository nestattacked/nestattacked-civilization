import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  DefeatType: string;
  Name: string;
  Blurb: string;
  RequirementSetId: string;
  EnabledByDefault?: boolean;
  OneMoreTurn?: boolean;
  Global?: boolean;
}

interface FloatAttributes {
  DefeatType?: string;
  Name?: string;
  Blurb?: string;
  RequirementSetId?: string;
  EnabledByDefault?: boolean;
  OneMoreTurn?: boolean;
  Global?: boolean;
}

const Defeats: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Defeats'
);

export { Defeats };
