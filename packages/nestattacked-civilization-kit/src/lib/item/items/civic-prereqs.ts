import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  Civic: string;
  PrereqCivic: string;
}

interface FloatAttributes {
  Civic?: string;
  PrereqCivic?: string;
}

const CivicPrereqs: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'CivicPrereqs'
);

export { CivicPrereqs };
