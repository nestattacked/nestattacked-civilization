import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ProjectType: string;
  PrereqProjectType: string;
  MinimumPlayerInstances: number;
}

interface FloatAttributes {
  ProjectType?: string;
  PrereqProjectType?: string;
  MinimumPlayerInstances?: number;
}

const ProjectPrereqs: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'ProjectPrereqs'
);

export { ProjectPrereqs };
