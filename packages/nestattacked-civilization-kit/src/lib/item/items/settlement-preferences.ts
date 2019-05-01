import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  PreferenceType: string;
}

interface FloatAttributes {
  PreferenceType?: string;
}

const SettlementPreferences: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'SettlementPreferences'
);

export { SettlementPreferences };
