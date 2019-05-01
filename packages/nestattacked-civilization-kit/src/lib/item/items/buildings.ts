import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  BuildingType: string;
  Name: string;
  PrereqTech?: string;
  PrereqCivic?: string;
  Cost: number;
  MaxPlayerInstances?: number;
  MaxWorldInstances?: number;
  Capital?: boolean;
  PrereqDistrict?: string;
  AdjacentDistrict?: string;
  Description?: string;
  RequiresPlacement?: boolean;
  RequiresRiver?: boolean;
  OuterDefenseHitPoints?: number;
  Housing?: number;
  Entertainment?: number;
  AdjacentResource?: string;
  Coast?: boolean;
  EnabledByReligion?: boolean;
  AllowsHolyCity?: boolean;
  PurchaseYield?: string;
  MustPurchase?: boolean;
  Maintenance?: number;
  IsWonder?: boolean;
  TraitType?: string;
  OuterDefenseStrength?: number;
  CitizenSlots?: number;
  MustBeLake?: boolean;
  MustNotBeLake?: boolean;
  RegionalRange?: number;
  AdjacentToMountain?: boolean;
  ObsoleteEra?: string;
  RequiresReligion?: boolean;
  GrantFortification?: number;
  DefenseModifier?: number;
  InternalOnly?: boolean;
  RequiresAdjacentRiver?: boolean;
  Quote?: string;
  QuoteAudio?: string;
  MustBeAdjacentLand?: boolean;
  AdvisorType?: string;
  AdjacentCapital?: boolean;
  AdjacentImprovement?: string;
  CityAdjacentTerrain?: string;
  UnlocksGovernmentPolicy?: boolean;
  GovernmentTierRequirement?: string;
}

interface FloatAttributes {
  BuildingType?: string;
  Name?: string;
  PrereqTech?: string;
  PrereqCivic?: string;
  Cost?: number;
  MaxPlayerInstances?: number;
  MaxWorldInstances?: number;
  Capital?: boolean;
  PrereqDistrict?: string;
  AdjacentDistrict?: string;
  Description?: string;
  RequiresPlacement?: boolean;
  RequiresRiver?: boolean;
  OuterDefenseHitPoints?: number;
  Housing?: number;
  Entertainment?: number;
  AdjacentResource?: string;
  Coast?: boolean;
  EnabledByReligion?: boolean;
  AllowsHolyCity?: boolean;
  PurchaseYield?: string;
  MustPurchase?: boolean;
  Maintenance?: number;
  IsWonder?: boolean;
  TraitType?: string;
  OuterDefenseStrength?: number;
  CitizenSlots?: number;
  MustBeLake?: boolean;
  MustNotBeLake?: boolean;
  RegionalRange?: number;
  AdjacentToMountain?: boolean;
  ObsoleteEra?: string;
  RequiresReligion?: boolean;
  GrantFortification?: number;
  DefenseModifier?: number;
  InternalOnly?: boolean;
  RequiresAdjacentRiver?: boolean;
  Quote?: string;
  QuoteAudio?: string;
  MustBeAdjacentLand?: boolean;
  AdvisorType?: string;
  AdjacentCapital?: boolean;
  AdjacentImprovement?: string;
  CityAdjacentTerrain?: string;
  UnlocksGovernmentPolicy?: boolean;
  GovernmentTierRequirement?: string;
}

const Buildings: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Buildings'
);

export { Buildings };
