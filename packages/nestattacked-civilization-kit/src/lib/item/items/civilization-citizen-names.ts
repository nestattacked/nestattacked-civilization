import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  CivilizationType: string;
  CitizenName: string;
  Female?: boolean;
  Modern?: boolean;
}

interface FloatAttributes {
  CivilizationType?: string;
  CitizenName?: string;
  Female?: boolean;
  Modern?: boolean;
}

const CivilizationCitizenNames: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'CivilizationCitizenNames'
);

export { CivilizationCitizenNames };
