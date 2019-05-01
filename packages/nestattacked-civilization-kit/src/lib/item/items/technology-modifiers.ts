import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  TechnologyType: string;
  ModifierId: string;
}

interface FloatAttributes {
  TechnologyType?: string;
  ModifierId?: string;
}

const TechnologyModifiers: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'TechnologyModifiers'
);

export { TechnologyModifiers };
