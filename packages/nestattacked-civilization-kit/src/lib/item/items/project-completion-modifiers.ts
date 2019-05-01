import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ProjectType: string;
  ModifierId: string;
}

interface FloatAttributes {
  ProjectType?: string;
  ModifierId?: string;
}

const ProjectCompletionModifiers: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'ProjectCompletionModifiers'
);

export { ProjectCompletionModifiers };
