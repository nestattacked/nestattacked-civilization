import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  BeliefType: string;
  ModifierID: string;
}

interface FloatAttributes {
  BeliefType?: string;
  ModifierID?: string;
}

const BeliefModifiers: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'BeliefModifiers'
);

export { BeliefModifiers };
