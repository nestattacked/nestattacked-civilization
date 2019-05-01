import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  PlayerCivLevel: string;
  OpponentCivLevel: string;
  DiplomaticStateType: string;
}

interface FloatAttributes {
  PlayerCivLevel?: string;
  OpponentCivLevel?: string;
  DiplomaticStateType?: string;
}

const DiplomaticStartStates: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'DiplomaticStartStates'
);

export { DiplomaticStartStates };
