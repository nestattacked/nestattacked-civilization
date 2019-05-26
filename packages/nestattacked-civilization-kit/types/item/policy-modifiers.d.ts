interface FixPolicyModifiersAttributes {
  PolicyType: string;
  ModifierId: string;
}

interface FloatPolicyModifiersAttributes {
  PolicyType?: string;
  ModifierId?: string;
}

export function createPolicyModifiers(attributes: FixPolicyModifiersAttributes): void;
