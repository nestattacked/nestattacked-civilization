import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  DealItemType: string;
  Name: string;
  Description: string;
  AllowDurationTrade?: boolean;
}

interface FloatAttributes {
  DealItemType?: string;
  Name?: string;
  Description?: string;
  AllowDurationTrade?: boolean;
}

const DealItems: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'DealItems'
);

export { DealItems };
