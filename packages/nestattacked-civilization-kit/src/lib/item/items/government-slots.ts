import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  GovernmentSlotType: string;
  Name: string;
  AllowsAnyPolicy: boolean;
}

interface FloatAttributes {
  GovernmentSlotType?: string;
  Name?: string;
  AllowsAnyPolicy?: boolean;
}

const GovernmentSlots: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'GovernmentSlots'
);

export { GovernmentSlots };
