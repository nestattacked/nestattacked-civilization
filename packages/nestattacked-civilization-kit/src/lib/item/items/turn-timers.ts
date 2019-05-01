import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  TurnTimerType: string;
  Name: string;
  Description: string;
}

interface FloatAttributes {
  TurnTimerType?: string;
  Name?: string;
  Description?: string;
}

const TurnTimers: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'TurnTimers'
);

export { TurnTimers };
