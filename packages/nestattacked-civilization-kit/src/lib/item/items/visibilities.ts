import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  VisibilityType: string;
  Name: string;
  RevealAgendas?: boolean;
}

interface FloatAttributes {
  VisibilityType?: string;
  Name?: string;
  RevealAgendas?: boolean;
}

const Visibilities: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Visibilities'
);

export { Visibilities };
