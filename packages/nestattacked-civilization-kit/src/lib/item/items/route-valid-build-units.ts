import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  RouteType: string;
  UnitType: string;
}

interface FloatAttributes {
  RouteType?: string;
  UnitType?: string;
}

const RouteValidBuildUnits: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Route_ValidBuildUnits'
);

export { RouteValidBuildUnits };
