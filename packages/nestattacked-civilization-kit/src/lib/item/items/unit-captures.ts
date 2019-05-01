import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  CapturedUnitType: string;
  BecomesUnitType: string;
}

interface FloatAttributes {
  CapturedUnitType?: string;
  BecomesUnitType?: string;
}

const UnitCaptures: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'UnitCaptures'
);

export { UnitCaptures };
