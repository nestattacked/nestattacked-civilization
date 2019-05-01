import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  PolicyType: string;
  ModifierId: string;
}

interface FloatAttributes {
  PolicyType?: string;
  ModifierId?: string;
}

const PolicyModifiers: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'PolicyModifiers'
);

export { PolicyModifiers };
