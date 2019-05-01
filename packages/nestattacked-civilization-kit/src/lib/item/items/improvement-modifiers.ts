import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ImprovementType: string;
  ModifierID: string;
}

interface FloatAttributes {
  ImprovementType?: string;
  ModifierID?: string;
}

const ImprovementModifiers: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'ImprovementModifiers'
);

export { ImprovementModifiers };
