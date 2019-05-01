import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  Civic: string;
  Era: string;
}

interface FloatAttributes {
  Civic?: string;
  Era?: string;
}

const StartingBoostedCivics: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'StartingBoostedCivics'
);

export { StartingBoostedCivics };
