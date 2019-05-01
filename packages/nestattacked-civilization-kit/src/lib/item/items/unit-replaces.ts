import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  CivUniqueUnitType: string;
  ReplacesUnitType: string;
}

interface FloatAttributes {
  CivUniqueUnitType?: string;
  ReplacesUnitType?: string;
}

const UnitReplaces: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'UnitReplaces'
);

export { UnitReplaces };
