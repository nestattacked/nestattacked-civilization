import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  EventType: string;
}

interface FloatAttributes {
  EventType?: string;
}

const AiEvents: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'AiEvents'
);

export { AiEvents };
