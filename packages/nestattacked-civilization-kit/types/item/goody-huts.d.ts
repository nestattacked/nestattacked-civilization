interface FixGoodyHutsAttributes {
  GoodyHutType: string;
  ImprovementType?: string;
  Weight: number;
}

interface FloatGoodyHutsAttributes {
  GoodyHutType?: string;
  ImprovementType?: string;
  Weight?: number;
}

export function createGoodyHuts(attributes: FixGoodyHutsAttributes): void;
