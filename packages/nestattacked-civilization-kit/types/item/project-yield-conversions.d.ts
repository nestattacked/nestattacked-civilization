interface FixProjectYieldConversionsAttributes {
  ProjectType: string;
  YieldType: string;
  PercentOfProductionRate?: number;
}

interface FloatProjectYieldConversionsAttributes {
  ProjectType?: string;
  YieldType?: string;
  PercentOfProductionRate?: number;
}

export function createProjectYieldConversions(attributes: FixProjectYieldConversionsAttributes): void;
