interface FixGovernmentBonusNamesAttributes {
  GovernmentBonusType: string;
}

interface FloatGovernmentBonusNamesAttributes {
  GovernmentBonusType?: string;
}

export function createGovernmentBonusNames(attributes: FixGovernmentBonusNamesAttributes): void;
