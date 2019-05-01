import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  Unit: string;
  UpgradeUnit: string;
}

interface FloatAttributes {
  Unit?: string;
  UpgradeUnit?: string;
}

const UnitUpgrades: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'UnitUpgrades'
);

export { UnitUpgrades };
