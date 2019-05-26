interface FixRequirementArgumentsAttributes {
  RequirementId: string;
  Name: string;
  Type?: string;
  Value: string;
  Extra?: string;
  SecondExtra?: string;
}

interface FloatRequirementArgumentsAttributes {
  RequirementId?: string;
  Name?: string;
  Type?: string;
  Value?: string;
  Extra?: string;
  SecondExtra?: string;
}

export function createRequirementArguments(attributes: FixRequirementArgumentsAttributes): void;
