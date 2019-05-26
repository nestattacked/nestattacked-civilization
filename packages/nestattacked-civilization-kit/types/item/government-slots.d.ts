interface FixGovernmentSlotsAttributes {
  GovernmentSlotType: string;
  Name: string;
  AllowsAnyPolicy: boolean;
}

interface FloatGovernmentSlotsAttributes {
  GovernmentSlotType?: string;
  Name?: string;
  AllowsAnyPolicy?: boolean;
}

export function createGovernmentSlots(attributes: FixGovernmentSlotsAttributes): void;
