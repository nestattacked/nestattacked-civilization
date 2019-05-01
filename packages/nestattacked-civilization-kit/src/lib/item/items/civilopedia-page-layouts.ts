import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  PageLayoutId: string;
  ScriptTemplate: string;
}

interface FloatAttributes {
  PageLayoutId?: string;
  ScriptTemplate?: string;
}

const CivilopediaPageLayouts: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'CivilopediaPageLayouts'
);

export { CivilopediaPageLayouts };
