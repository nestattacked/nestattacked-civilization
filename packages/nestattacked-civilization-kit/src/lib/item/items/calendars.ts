import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  CalendarType: string;
  Description?: string;
}

interface FloatAttributes {
  CalendarType?: string;
  Description?: string;
}

const Calendars: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Calendars'
);

export { Calendars };
