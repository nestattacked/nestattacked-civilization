import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  Id: number;
  ImprovementType: string;
  YieldType: string;
  BonusYieldChange: number;
  PrereqTech?: string;
  PrereqCivic?: string;
}

interface FloatAttributes {
  Id?: number;
  ImprovementType?: string;
  YieldType?: string;
  BonusYieldChange?: number;
  PrereqTech?: string;
  PrereqCivic?: string;
}

const ImprovementBonusYieldChanges: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Improvement_BonusYieldChanges'
);

export { ImprovementBonusYieldChanges };
