import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  GoodyHut: string;
  SubTypeGoodyHut: string;
  Description?: string;
  Weight: number;
  ModifierID: string;
  UpgradeUnit?: boolean;
  Turn?: number;
  Experience?: boolean;
  Heal?: number;
  Relic?: boolean;
  Trader?: boolean;
  MinOneCity?: boolean;
  RequiresUnit?: boolean;
}

interface FloatAttributes {
  GoodyHut?: string;
  SubTypeGoodyHut?: string;
  Description?: string;
  Weight?: number;
  ModifierID?: string;
  UpgradeUnit?: boolean;
  Turn?: number;
  Experience?: boolean;
  Heal?: number;
  Relic?: boolean;
  Trader?: boolean;
  MinOneCity?: boolean;
  RequiresUnit?: boolean;
}

const GoodyHutSubTypes: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'GoodyHutSubTypes'
);

export { GoodyHutSubTypes };
