import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  GreatWorkSlotType: string;
}

interface FloatAttributes {
  GreatWorkSlotType?: string;
}

const GreatWorkSlotTypes: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'GreatWorkSlotTypes'
);

export { GreatWorkSlotTypes };
