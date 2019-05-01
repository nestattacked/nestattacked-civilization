import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  PromotionClassType: string;
  Name: string;
}

interface FloatAttributes {
  PromotionClassType?: string;
  Name?: string;
}

const UnitPromotionClasses: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'UnitPromotionClasses'
);

export { UnitPromotionClasses };
