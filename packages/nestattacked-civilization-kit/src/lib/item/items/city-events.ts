import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  EventType: string;
}

interface FloatAttributes {
  EventType?: string;
}

const CityEvents: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'CityEvents'
);

export { CityEvents };
