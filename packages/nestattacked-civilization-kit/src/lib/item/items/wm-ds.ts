import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  WeaponType: string;
  Name: string;
  BlastRadius?: number;
  FalloutDuration?: number;
  AffectPopulation?: boolean;
  AffectImprovements?: boolean;
  AffectBuildings?: boolean;
  AffectUnits?: boolean;
  AffectResources?: boolean;
  AffectRoutes?: boolean;
  ICBMStrikeRange?: number;
  Maintenance?: number;
}

interface FloatAttributes {
  WeaponType?: string;
  Name?: string;
  BlastRadius?: number;
  FalloutDuration?: number;
  AffectPopulation?: boolean;
  AffectImprovements?: boolean;
  AffectBuildings?: boolean;
  AffectUnits?: boolean;
  AffectResources?: boolean;
  AffectRoutes?: boolean;
  ICBMStrikeRange?: number;
  Maintenance?: number;
}

const WmDs: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'WMDs'
);

export { WmDs };
