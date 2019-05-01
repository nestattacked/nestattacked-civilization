import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  TriggerType: string;
  RequiredState: string;
}

interface FloatAttributes {
  TriggerType?: string;
  RequiredState?: string;
}

const DiplomaticTriggersRequiredStates: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'DiplomaticTriggers_RequiredStates'
);

export { DiplomaticTriggersRequiredStates };
