import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  Type: string;
}

interface FloatAttributes {
  Type?: string;
}

const DiplomacyStatementSubTypes: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'DiplomacyStatementSubTypes'
);

export { DiplomacyStatementSubTypes };
