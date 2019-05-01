import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  GovernmentType: string;
  ModifierId: string;
}

interface FloatAttributes {
  GovernmentType?: string;
  ModifierId?: string;
}

const GovernmentModifiers: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'GovernmentModifiers'
);

export { GovernmentModifiers };
