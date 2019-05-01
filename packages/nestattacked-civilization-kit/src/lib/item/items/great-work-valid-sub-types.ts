import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  GreatWorkSlotType: string;
  GreatWorkObjectType: string;
}

interface FloatAttributes {
  GreatWorkSlotType?: string;
  GreatWorkObjectType?: string;
}

const GreatWorkValidSubTypes: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'GreatWork_ValidSubTypes'
);

export { GreatWorkValidSubTypes };
