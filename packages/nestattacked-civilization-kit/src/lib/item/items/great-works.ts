import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  GreatWorkType: string;
  GreatWorkObjectType: string;
  GreatPersonIndividualType?: string;
  Name: string;
  Audio?: string;
  Image?: string;
  Quote?: string;
  Tourism?: number;
  EraType?: string;
}

interface FloatAttributes {
  GreatWorkType?: string;
  GreatWorkObjectType?: string;
  GreatPersonIndividualType?: string;
  Name?: string;
  Audio?: string;
  Image?: string;
  Quote?: string;
  Tourism?: number;
  EraType?: string;
}

const GreatWorks: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'GreatWorks'
);

export { GreatWorks };
