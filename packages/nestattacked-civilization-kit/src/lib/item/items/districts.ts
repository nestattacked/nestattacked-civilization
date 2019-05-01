import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  DistrictType: string;
  Name: string;
  PrereqTech?: string;
  PrereqCivic?: string;
  Coast?: boolean;
  Description?: string;
  Cost?: number;
  RequiresPlacement: boolean;
  RequiresPopulation?: boolean;
  NoAdjacentCity: boolean;
  CityCenter?: boolean;
  Aqueduct: boolean;
  InternalOnly: boolean;
  ZOC?: boolean;
  FreeEmbark?: boolean;
  HitPoints?: number;
  CaptureRemovesBuildings: boolean;
  CaptureRemovesCityDefenses: boolean;
  PlunderType: string;
  PlunderAmount?: number;
  TradeEmbark?: boolean;
  MilitaryDomain: string;
  CostProgressionModel?: string;
  CostProgressionParam1?: number;
  TraitType?: string;
  Appeal?: number;
  Housing?: number;
  Entertainment?: number;
  OnePerCity?: boolean;
  AllowsHolyCity?: boolean;
  Maintenance?: number;
  AirSlots?: number;
  CitizenSlots?: number;
  TravelTime?: number;
  CityStrengthModifier?: number;
  AdjacentToLand?: boolean;
  CanAttack?: boolean;
  AdvisorType?: string;
  CaptureRemovesDistrict?: boolean;
  MaxPerPlayer?: number;
}

interface FloatAttributes {
  DistrictType?: string;
  Name?: string;
  PrereqTech?: string;
  PrereqCivic?: string;
  Coast?: boolean;
  Description?: string;
  Cost?: number;
  RequiresPlacement?: boolean;
  RequiresPopulation?: boolean;
  NoAdjacentCity?: boolean;
  CityCenter?: boolean;
  Aqueduct?: boolean;
  InternalOnly?: boolean;
  ZOC?: boolean;
  FreeEmbark?: boolean;
  HitPoints?: number;
  CaptureRemovesBuildings?: boolean;
  CaptureRemovesCityDefenses?: boolean;
  PlunderType?: string;
  PlunderAmount?: number;
  TradeEmbark?: boolean;
  MilitaryDomain?: string;
  CostProgressionModel?: string;
  CostProgressionParam1?: number;
  TraitType?: string;
  Appeal?: number;
  Housing?: number;
  Entertainment?: number;
  OnePerCity?: boolean;
  AllowsHolyCity?: boolean;
  Maintenance?: number;
  AirSlots?: number;
  CitizenSlots?: number;
  TravelTime?: number;
  CityStrengthModifier?: number;
  AdjacentToLand?: boolean;
  CanAttack?: boolean;
  AdvisorType?: string;
  CaptureRemovesDistrict?: boolean;
  MaxPerPlayer?: number;
}

const Districts: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Districts'
);

export { Districts };
