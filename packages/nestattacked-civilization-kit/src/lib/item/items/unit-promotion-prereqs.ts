import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  UnitPromotion: string;
  PrereqUnitPromotion: string;
}

interface FloatAttributes {
  UnitPromotion?: string;
  PrereqUnitPromotion?: string;
}

const UnitPromotionPrereqs: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'UnitPromotionPrereqs'
);

export { UnitPromotionPrereqs };
