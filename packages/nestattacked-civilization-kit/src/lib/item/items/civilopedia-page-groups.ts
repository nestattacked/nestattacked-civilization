import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  SectionId: string;
  PageGroupId: string;
  Name: string;
  Tooltip?: string;
  VisibleIfEmpty?: boolean;
  SortIndex?: number;
}

interface FloatAttributes {
  SectionId?: string;
  PageGroupId?: string;
  Name?: string;
  Tooltip?: string;
  VisibleIfEmpty?: boolean;
  SortIndex?: number;
}

const CivilopediaPageGroups: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'CivilopediaPageGroups'
);

export { CivilopediaPageGroups };
