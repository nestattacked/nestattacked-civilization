interface FixResourceHarvestsAttributes {
  ResourceType: string;
  YieldType: string;
  Amount: number;
  PrereqTech?: string;
}

interface FloatResourceHarvestsAttributes {
  ResourceType?: string;
  YieldType?: string;
  Amount?: number;
  PrereqTech?: string;
}

export function createResourceHarvests(attributes: FixResourceHarvestsAttributes): void;
