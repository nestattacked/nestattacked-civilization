interface FixGoodyHutSubTypesAttributes {
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

interface FloatGoodyHutSubTypesAttributes {
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

export function createGoodyHutSubTypes(attributes: FixGoodyHutSubTypesAttributes): void;
