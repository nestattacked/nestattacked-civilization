import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  SectionId: string;
}

interface FloatAttributes {
  SectionId?: string;
}

const CivilopediaSectionExcludes: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'CivilopediaSectionExcludes'
);

export { CivilopediaSectionExcludes };
