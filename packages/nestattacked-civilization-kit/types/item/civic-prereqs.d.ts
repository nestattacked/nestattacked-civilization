interface FixCivicPrereqsAttributes {
  Civic: string;
  PrereqCivic: string;
}

interface FloatCivicPrereqsAttributes {
  Civic?: string;
  PrereqCivic?: string;
}

export function createCivicPrereqs(attributes: FixCivicPrereqsAttributes): void;
