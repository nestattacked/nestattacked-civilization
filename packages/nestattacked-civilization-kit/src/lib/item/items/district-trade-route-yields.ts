import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  DistrictType: string;
  YieldType: string;
  YieldChangeAsOrigin?: number;
  YieldChangeAsDomesticDestination?: number;
  YieldChangeAsInternationalDestination?: number;
}

interface FloatAttributes {
  DistrictType?: string;
  YieldType?: string;
  YieldChangeAsOrigin?: number;
  YieldChangeAsDomesticDestination?: number;
  YieldChangeAsInternationalDestination?: number;
}

const DistrictTradeRouteYields: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'District_TradeRouteYields'
);

export { DistrictTradeRouteYields };
