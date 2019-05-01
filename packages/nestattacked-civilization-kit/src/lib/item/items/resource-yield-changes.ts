import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ResourceType: string;
  YieldType: string;
  YieldChange: number;
}

interface FloatAttributes {
  ResourceType?: string;
  YieldType?: string;
  YieldChange?: number;
}

const ResourceYieldChanges: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Resource_YieldChanges'
);

export { ResourceYieldChanges };
