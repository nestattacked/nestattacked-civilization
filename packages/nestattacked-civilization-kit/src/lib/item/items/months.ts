import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  MonthType: string;
  Description: string;
}

interface FloatAttributes {
  MonthType?: string;
  Description?: string;
}

const Months: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Months'
);

export { Months };
