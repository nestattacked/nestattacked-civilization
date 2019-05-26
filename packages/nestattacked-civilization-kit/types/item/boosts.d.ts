interface FixBoostsAttributes {
  BoostID: number;
  TechnologyType?: string;
  CivicType?: string;
  Boost: number;
  TriggerId?: number;
  TriggerDescription: string;
  TriggerLongDescription: string;
  Unit1Type?: string;
  BoostClass: string;
  Unit2Type?: string;
  BuildingType?: string;
  ImprovementType?: string;
  BoostingTechType?: string;
  ResourceType?: string;
  NumItems?: number;
  DistrictType?: string;
  RequiresResource?: boolean;
  RequirementSetId?: string;
  GovernmentSlotType?: string;
  BoostingCivicType?: string;
  GovernmentTierType?: string;
}

interface FloatBoostsAttributes {
  BoostID?: number;
  TechnologyType?: string;
  CivicType?: string;
  Boost?: number;
  TriggerId?: number;
  TriggerDescription?: string;
  TriggerLongDescription?: string;
  Unit1Type?: string;
  BoostClass?: string;
  Unit2Type?: string;
  BuildingType?: string;
  ImprovementType?: string;
  BoostingTechType?: string;
  ResourceType?: string;
  NumItems?: number;
  DistrictType?: string;
  RequiresResource?: boolean;
  RequirementSetId?: string;
  GovernmentSlotType?: string;
  BoostingCivicType?: string;
  GovernmentTierType?: string;
}

export function createBoosts(attributes: FixBoostsAttributes): void;
