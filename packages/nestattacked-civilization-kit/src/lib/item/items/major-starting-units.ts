import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  Unit: string;
  Era: string;
  District: string;
  Quantity?: number;
  NotStartTile?: boolean;
  OnDistrictCreated?: boolean;
  AiOnly?: boolean;
  MinDifficulty: string;
  DifficultyDelta?: number;
}

interface FloatAttributes {
  Unit?: string;
  Era?: string;
  District?: string;
  Quantity?: number;
  NotStartTile?: boolean;
  OnDistrictCreated?: boolean;
  AiOnly?: boolean;
  MinDifficulty?: string;
  DifficultyDelta?: number;
}

const MajorStartingUnits: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'MajorStartingUnits'
);

export { MajorStartingUnits };
