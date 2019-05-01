import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  GreatPersonIndividualType: string;
  ModifierId: string;
  AttachmentTargetType?: string;
}

interface FloatAttributes {
  GreatPersonIndividualType?: string;
  ModifierId?: string;
  AttachmentTargetType?: string;
}

const GreatPersonIndividualActionModifiers: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'GreatPersonIndividualActionModifiers'
);

export { GreatPersonIndividualActionModifiers };
