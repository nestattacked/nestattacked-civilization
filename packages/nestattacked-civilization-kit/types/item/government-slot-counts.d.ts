interface FixGovernmentSlotCountsAttributes {
  GovernmentType: string;
  GovernmentSlotType: string;
  NumSlots: number;
}

interface FloatGovernmentSlotCountsAttributes {
  GovernmentType?: string;
  GovernmentSlotType?: string;
  NumSlots?: number;
}

export function createGovernmentSlotCounts(attributes: FixGovernmentSlotCountsAttributes): void;
