import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  BaseTable: string;
  PropertyName: string;
  TargetTable: string;
  IsCollection?: number;
  Query: string;
}

interface FloatAttributes {
  BaseTable?: string;
  PropertyName?: string;
  TargetTable?: string;
  IsCollection?: number;
  Query?: string;
}

const NavigationProperties: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'NavigationProperties'
);

export { NavigationProperties };
