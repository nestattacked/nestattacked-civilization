import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  BeliefType: string;
  Name: string;
  Description: string;
  BeliefClassType: string;
}

interface FloatAttributes {
  BeliefType?: string;
  Name?: string;
  Description?: string;
  BeliefClassType?: string;
}

const Beliefs: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Beliefs'
);

export { Beliefs };
