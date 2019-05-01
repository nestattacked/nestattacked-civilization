import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  HappinessType: string;
  Name: string;
  MinimumAmenityScore?: number;
  MaximumAmenityScore?: number;
  GrowthModifier?: number;
  NonFoodYieldModifier?: number;
  RebellionPoints?: number;
}

interface FloatAttributes {
  HappinessType?: string;
  Name?: string;
  MinimumAmenityScore?: number;
  MaximumAmenityScore?: number;
  GrowthModifier?: number;
  NonFoodYieldModifier?: number;
  RebellionPoints?: number;
}

const Happinesses: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Happinesses'
);

export { Happinesses };
