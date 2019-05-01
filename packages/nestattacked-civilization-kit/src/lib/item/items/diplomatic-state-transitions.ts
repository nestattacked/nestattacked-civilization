import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  BaseState: string;
  TransitionState: string;
  RequireTransitionMax?: number;
  ThrottleTurns?: number;
  AllowTransitionMin?: number;
  RequireTransitionMin?: number;
  AllowTransitionMax?: number;
  AllowTransitionCheck: string;
  OnTransitionAction?: string;
}

interface FloatAttributes {
  BaseState?: string;
  TransitionState?: string;
  RequireTransitionMax?: number;
  ThrottleTurns?: number;
  AllowTransitionMin?: number;
  RequireTransitionMin?: number;
  AllowTransitionMax?: number;
  AllowTransitionCheck?: string;
  OnTransitionAction?: string;
}

const DiplomaticStateTransitions: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'DiplomaticStateTransitions'
);

export { DiplomaticStateTransitions };
