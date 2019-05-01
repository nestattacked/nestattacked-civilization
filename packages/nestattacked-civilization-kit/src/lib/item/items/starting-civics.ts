import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  Civic: string;
  Era: string;
}

interface FloatAttributes {
  Civic?: string;
  Era?: string;
}

const StartingCivics: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'StartingCivics'
);

export { StartingCivics };
