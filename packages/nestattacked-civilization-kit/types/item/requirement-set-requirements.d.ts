interface FixRequirementSetRequirementsAttributes {
  RequirementSetId: string;
  RequirementId: string;
}

interface FloatRequirementSetRequirementsAttributes {
  RequirementSetId?: string;
  RequirementId?: string;
}

export function createRequirementSetRequirements(attributes: FixRequirementSetRequirementsAttributes): void;
