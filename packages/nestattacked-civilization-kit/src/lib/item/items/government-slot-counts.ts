import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  GovernmentType: string;
  GovernmentSlotType: string;
  NumSlots: number;
}

interface FloatAttributes {
  GovernmentType?: string;
  GovernmentSlotType?: string;
  NumSlots?: number;
}

const GovernmentSlotCounts: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Government_SlotCounts'
);

export { GovernmentSlotCounts };
