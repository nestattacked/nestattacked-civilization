import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  Type: string;
}

interface FloatAttributes {
  Type?: string;
}

const DiplomacyStatementTypes: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'DiplomacyStatementTypes'
);

export { DiplomacyStatementTypes };
