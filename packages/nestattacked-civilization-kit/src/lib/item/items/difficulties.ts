import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  DifficultyType: string;
  Name: string;
}

interface FloatAttributes {
  DifficultyType?: string;
  Name?: string;
}

const Difficulties: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Difficulties'
);

export { Difficulties };
