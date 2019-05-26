interface FixWmDsAttributes {
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

interface FloatWmDsAttributes {
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

export function createWmDs(attributes: FixWmDsAttributes): void;
