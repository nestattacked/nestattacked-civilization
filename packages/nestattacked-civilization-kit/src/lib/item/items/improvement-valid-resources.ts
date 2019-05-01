import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ImprovementType: string;
  ResourceType: string;
  MustRemoveFeature?: boolean;
}

interface FloatAttributes {
  ImprovementType?: string;
  ResourceType?: string;
  MustRemoveFeature?: boolean;
}

const ImprovementValidResources: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Improvement_ValidResources'
);

export { ImprovementValidResources };
