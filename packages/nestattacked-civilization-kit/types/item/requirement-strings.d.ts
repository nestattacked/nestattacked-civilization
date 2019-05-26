interface FixRequirementStringsAttributes {
  RequirementId: string;
  Context: string;
  Text: string;
}

interface FloatRequirementStringsAttributes {
  RequirementId?: string;
  Context?: string;
  Text?: string;
}

export function createRequirementStrings(attributes: FixRequirementStringsAttributes): void;
