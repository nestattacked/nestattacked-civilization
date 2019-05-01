import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  Type: string;
  BackgroundImage?: string;
}

interface FloatAttributes {
  Type?: string;
  BackgroundImage?: string;
}

const DiplomacyInfo: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'DiplomacyInfo'
);

export { DiplomacyInfo };
