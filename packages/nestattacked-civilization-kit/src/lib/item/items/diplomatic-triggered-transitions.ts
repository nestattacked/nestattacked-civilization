import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  TriggerType: string;
  CivilizationLevel: string;
  OpponentCivilizationLevel: string;
  TransitionState: string;
}

interface FloatAttributes {
  TriggerType?: string;
  CivilizationLevel?: string;
  OpponentCivilizationLevel?: string;
  TransitionState?: string;
}

const DiplomaticTriggeredTransitions: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'DiplomaticTriggeredTransitions'
);

export { DiplomaticTriggeredTransitions };
