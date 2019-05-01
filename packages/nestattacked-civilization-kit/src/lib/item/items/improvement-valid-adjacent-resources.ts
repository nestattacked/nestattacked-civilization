import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ImprovementType: string;
  ResourceType: string;
}

interface FloatAttributes {
  ImprovementType?: string;
  ResourceType?: string;
}

const ImprovementValidAdjacentResources: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Improvement_ValidAdjacentResources'
);

export { ImprovementValidAdjacentResources };
