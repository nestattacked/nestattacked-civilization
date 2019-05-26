interface FixRoutesAttributes {
  RouteType: string;
  Name: string;
  Description: string;
  MovementCost: number;
  SupportsBridges: boolean;
  PlacementValue: number;
  PlacementRequiresRoutePresent: boolean;
  PlacementRequiresOwnedTile: boolean;
  PrereqEra?: string;
}

interface FloatRoutesAttributes {
  RouteType?: string;
  Name?: string;
  Description?: string;
  MovementCost?: number;
  SupportsBridges?: boolean;
  PlacementValue?: number;
  PlacementRequiresRoutePresent?: boolean;
  PlacementRequiresOwnedTile?: boolean;
  PrereqEra?: string;
}

export function createRoutes(attributes: FixRoutesAttributes): void;
