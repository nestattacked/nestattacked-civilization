import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  SeasonType: string;
  Description: string;
}

interface FloatAttributes {
  SeasonType?: string;
  Description?: string;
}

const Seasons: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Seasons'
);

export { Seasons };
