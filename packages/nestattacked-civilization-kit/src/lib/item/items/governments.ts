import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  GovernmentType: string;
  Name: string;
  PrereqCivic?: string;
  InherentBonusDesc: string;
  AccumulatedBonusShortDesc: string;
  AccumulatedBonusDesc: string;
  OtherGovernmentIntolerance?: number;
  InfluencePointsPerTurn: number;
  InfluencePointsThreshold: number;
  InfluenceTokensPerThreshold: number;
  BonusType: string;
  PolicyToUnlock?: string;
  Tier?: string;
}

interface FloatAttributes {
  GovernmentType?: string;
  Name?: string;
  PrereqCivic?: string;
  InherentBonusDesc?: string;
  AccumulatedBonusShortDesc?: string;
  AccumulatedBonusDesc?: string;
  OtherGovernmentIntolerance?: number;
  InfluencePointsPerTurn?: number;
  InfluencePointsThreshold?: number;
  InfluenceTokensPerThreshold?: number;
  BonusType?: string;
  PolicyToUnlock?: string;
  Tier?: string;
}

const Governments: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Governments'
);

export { Governments };
