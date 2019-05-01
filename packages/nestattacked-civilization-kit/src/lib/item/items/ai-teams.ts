import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  TeamName: string;
}

interface FloatAttributes {
  TeamName?: string;
}

const AiTeams: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'AiTeams'
);

export { AiTeams };
