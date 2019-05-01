import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  Technology: string;
  PrereqTech: string;
}

interface FloatAttributes {
  Technology?: string;
  PrereqTech?: string;
}

const TechnologyPrereqs: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'TechnologyPrereqs'
);

export { TechnologyPrereqs };
