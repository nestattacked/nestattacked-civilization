interface FixResourceYieldChangesAttributes {
  ResourceType: string;
  YieldType: string;
  YieldChange: number;
}

interface FloatResourceYieldChangesAttributes {
  ResourceType?: string;
  YieldType?: string;
  YieldChange?: number;
}

export function createResourceYieldChanges(attributes: FixResourceYieldChangesAttributes): void;
