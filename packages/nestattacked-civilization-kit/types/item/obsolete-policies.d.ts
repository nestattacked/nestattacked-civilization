interface FixObsoletePoliciesAttributes {
  PolicyType: string;
  ObsoletePolicy: string;
  RequiresAvailableGreatPersonClass?: string;
}

interface FloatObsoletePoliciesAttributes {
  PolicyType?: string;
  ObsoletePolicy?: string;
  RequiresAvailableGreatPersonClass?: string;
}

export function createObsoletePolicies(attributes: FixObsoletePoliciesAttributes): void;
