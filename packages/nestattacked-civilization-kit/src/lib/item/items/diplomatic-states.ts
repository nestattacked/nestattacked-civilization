import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  StateType: string;
  Name: string;
  DiplomaticYieldBonus?: number;
  RelationshipLevel?: number;
}

interface FloatAttributes {
  StateType?: string;
  Name?: string;
  DiplomaticYieldBonus?: number;
  RelationshipLevel?: number;
}

const DiplomaticStates: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'DiplomaticStates'
);

export { DiplomaticStates };
