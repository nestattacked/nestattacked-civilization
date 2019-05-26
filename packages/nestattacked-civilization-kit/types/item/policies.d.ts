interface FixPoliciesAttributes {
  PolicyType: string;
  Description?: string;
  PrereqCivic?: string;
  PrereqTech?: string;
  Name: string;
  GovernmentSlotType: string;
  RequiresGovernmentUnlock?: boolean;
  ExplicitUnlock?: boolean;
}

interface FloatPoliciesAttributes {
  PolicyType?: string;
  Description?: string;
  PrereqCivic?: string;
  PrereqTech?: string;
  Name?: string;
  GovernmentSlotType?: string;
  RequiresGovernmentUnlock?: boolean;
  ExplicitUnlock?: boolean;
}

export function createPolicies(attributes: FixPoliciesAttributes): void;
