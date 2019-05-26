interface FixUnitUpgradesAttributes {
  Unit: string;
  UpgradeUnit: string;
}

interface FloatUnitUpgradesAttributes {
  Unit?: string;
  UpgradeUnit?: string;
}

export function createUnitUpgrades(attributes: FixUnitUpgradesAttributes): void;
