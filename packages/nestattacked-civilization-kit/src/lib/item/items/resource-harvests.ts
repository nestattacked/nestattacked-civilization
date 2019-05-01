import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ResourceType: string;
  YieldType: string;
  Amount: number;
  PrereqTech?: string;
}

interface FloatAttributes {
  ResourceType?: string;
  YieldType?: string;
  Amount?: number;
  PrereqTech?: string;
}

const ResourceHarvests: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Resource_Harvests'
);

export { ResourceHarvests };
