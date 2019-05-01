import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ProjectType: string;
  YieldType: string;
  PercentOfProductionRate?: number;
}

interface FloatAttributes {
  ProjectType?: string;
  YieldType?: string;
  PercentOfProductionRate?: number;
}

const ProjectYieldConversions: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Project_YieldConversions'
);

export { ProjectYieldConversions };
