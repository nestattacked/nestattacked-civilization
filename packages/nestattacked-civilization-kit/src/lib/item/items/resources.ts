import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ResourceType: string;
  Name: string;
  ResourceClassType: string;
  Happiness?: number;
  NoRiver?: boolean;
  RequiresRiver?: boolean;
  Frequency?: number;
  Clumped?: boolean;
  PrereqTech?: string;
  PrereqCivic?: string;
  PeakEra?: string;
  RevealedEra?: number;
  LakeEligible?: boolean;
  AdjacentToLand?: boolean;
  SeaFrequency?: number;
}

interface FloatAttributes {
  ResourceType?: string;
  Name?: string;
  ResourceClassType?: string;
  Happiness?: number;
  NoRiver?: boolean;
  RequiresRiver?: boolean;
  Frequency?: number;
  Clumped?: boolean;
  PrereqTech?: string;
  PrereqCivic?: string;
  PeakEra?: string;
  RevealedEra?: number;
  LakeEligible?: boolean;
  AdjacentToLand?: boolean;
  SeaFrequency?: number;
}

const Resources: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Resources'
);

export { Resources };
