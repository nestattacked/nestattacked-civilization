interface FixRouteValidBuildUnitsAttributes {
  RouteType: string;
  UnitType: string;
}

interface FloatRouteValidBuildUnitsAttributes {
  RouteType?: string;
  UnitType?: string;
}

export function createRouteValidBuildUnits(attributes: FixRouteValidBuildUnitsAttributes): void;
