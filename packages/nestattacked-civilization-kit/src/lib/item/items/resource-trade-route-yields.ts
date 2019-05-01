import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ResourceType: string;
  YieldType: string;
  YieldChange: number;
}

interface FloatAttributes {
  ResourceType?: string;
  YieldType?: string;
  YieldChange?: number;
}

const ResourceTradeRouteYields: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Resource_TradeRouteYields'
);

export { ResourceTradeRouteYields };
