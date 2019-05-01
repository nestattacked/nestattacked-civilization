import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  SectionId: string;
  PageId: string;
  PageGroupId?: string;
  PageLayoutId: string;
  Name: string;
  Tooltip?: string;
  SortIndex?: number;
  TextKeyPrefix?: string;
}

interface FloatAttributes {
  SectionId?: string;
  PageId?: string;
  PageGroupId?: string;
  PageLayoutId?: string;
  Name?: string;
  Tooltip?: string;
  SortIndex?: number;
  TextKeyPrefix?: string;
}

const CivilopediaPages: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'CivilopediaPages'
);

export { CivilopediaPages };
