import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  TriggerType: string;
}

interface FloatAttributes {
  TriggerType?: string;
}

const DiplomaticTriggers: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'DiplomaticTriggers'
);

export { DiplomaticTriggers };
