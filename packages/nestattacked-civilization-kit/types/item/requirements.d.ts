interface FixRequirementsAttributes {
  RequirementId: string;
  RequirementType: string;
  Likeliness?: number;
  Impact?: number;
  Inverse?: boolean;
  Reverse?: boolean;
  Persistent?: boolean;
  ProgressWeight?: number;
  Triggered?: boolean;
}

interface FloatRequirementsAttributes {
  RequirementId?: string;
  RequirementType?: string;
  Likeliness?: number;
  Impact?: number;
  Inverse?: boolean;
  Reverse?: boolean;
  Persistent?: boolean;
  ProgressWeight?: number;
  Triggered?: boolean;
}

export function createRequirements(attributes: FixRequirementsAttributes): void;
