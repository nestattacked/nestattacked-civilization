interface FixRequirementSetsAttributes {
  RequirementSetId: string;
  RequirementSetType: string;
}

interface FloatRequirementSetsAttributes {
  RequirementSetId?: string;
  RequirementSetType?: string;
}

export function createRequirementSets(attributes: FixRequirementSetsAttributes): void;
