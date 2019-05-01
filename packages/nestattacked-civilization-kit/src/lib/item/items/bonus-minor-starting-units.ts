import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  Unit: string;
  Era: string;
  Quantity?: number;
  OnDistrictCreated?: boolean;
  District?: string;
  MinDifficulty: string;
  DifficultyDelta?: number;
}

interface FloatAttributes {
  Unit?: string;
  Era?: string;
  Quantity?: number;
  OnDistrictCreated?: boolean;
  District?: string;
  MinDifficulty?: string;
  DifficultyDelta?: number;
}

const BonusMinorStartingUnits: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'BonusMinorStartingUnits'
);

export { BonusMinorStartingUnits };
