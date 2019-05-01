import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ImprovementType: string;
  TourismSource?: string;
  PrereqCivic?: string;
  PrereqTech?: string;
  ScalingFactor?: number;
}

interface FloatAttributes {
  ImprovementType?: string;
  TourismSource?: string;
  PrereqCivic?: string;
  PrereqTech?: string;
  ScalingFactor?: number;
}

const ImprovementTourism: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Improvement_Tourism'
);

export { ImprovementTourism };
