import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  StateType: number;
  DiplomaticActionType: number;
  AiAllowed?: boolean;
  Worth?: number;
  Cost?: number;
  TransitionToState?: string;
  TeamOnly?: boolean;
}

interface FloatAttributes {
  StateType?: number;
  DiplomaticActionType?: number;
  AiAllowed?: boolean;
  Worth?: number;
  Cost?: number;
  TransitionToState?: string;
  TeamOnly?: boolean;
}

const DiplomaticStateActions: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'DiplomaticStateActions'
);

export { DiplomaticStateActions };
