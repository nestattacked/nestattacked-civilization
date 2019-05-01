import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  BeliefClassType: string;
  Name: string;
  MaxInReligion?: number;
  AdoptionOrder?: number;
}

interface FloatAttributes {
  BeliefClassType?: string;
  Name?: string;
  MaxInReligion?: number;
  AdoptionOrder?: number;
}

const BeliefClasses: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'BeliefClasses'
);

export { BeliefClasses };
