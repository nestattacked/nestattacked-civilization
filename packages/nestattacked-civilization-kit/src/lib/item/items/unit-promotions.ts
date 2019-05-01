import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  UnitPromotionType: string;
  Name: string;
  Description: string;
  Level: number;
  Specialization?: string;
  PromotionClass?: string;
  Column?: number;
}

interface FloatAttributes {
  UnitPromotionType?: string;
  Name?: string;
  Description?: string;
  Level?: number;
  Specialization?: string;
  PromotionClass?: string;
  Column?: number;
}

const UnitPromotions: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'UnitPromotions'
);

export { UnitPromotions };
