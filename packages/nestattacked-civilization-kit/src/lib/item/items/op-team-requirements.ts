import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  TeamName: string;
  AiType: string;
  MinNumber?: number;
  MaxNumber?: number;
  MinPercentage?: number;
  MaxPercentage?: number;
  ReconsiderWhilePreparing?: boolean;
  AiTypeDependence?: string;
}

interface FloatAttributes {
  TeamName?: string;
  AiType?: string;
  MinNumber?: number;
  MaxNumber?: number;
  MinPercentage?: number;
  MaxPercentage?: number;
  ReconsiderWhilePreparing?: boolean;
  AiTypeDependence?: string;
}

const OpTeamRequirements: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'OpTeamRequirements'
);

export { OpTeamRequirements };
