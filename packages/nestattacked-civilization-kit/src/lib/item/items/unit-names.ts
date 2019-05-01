import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ID: number;
  NameType: string;
  TextKey: string;
}

interface FloatAttributes {
  ID?: number;
  NameType?: string;
  TextKey?: string;
}

const UnitNames: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'UnitNames'
);

export { UnitNames };
