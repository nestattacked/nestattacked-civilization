import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  SectionId: string;
  PageGroupId: string;
}

interface FloatAttributes {
  SectionId?: string;
  PageGroupId?: string;
}

const CivilopediaPageGroupExcludes: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'CivilopediaPageGroupExcludes'
);

export { CivilopediaPageGroupExcludes };
