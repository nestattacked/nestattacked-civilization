import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
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

interface FloatAttributes {
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

const Routes: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Routes'
);

export { Routes };
