import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  UnitPromotionType: number;
  ModifierId: string;
}

interface FloatAttributes {
  UnitPromotionType?: number;
  ModifierId?: string;
}

const UnitPromotionModifiers: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'UnitPromotionModifiers'
);

export { UnitPromotionModifiers };
