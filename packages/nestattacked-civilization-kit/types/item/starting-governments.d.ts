interface FixStartingGovernmentsAttributes {
  Government: string;
  Era: string;
  Change?: boolean;
}

interface FloatStartingGovernmentsAttributes {
  Government?: string;
  Era?: string;
  Change?: boolean;
}

export function createStartingGovernments(attributes: FixStartingGovernmentsAttributes): void;
