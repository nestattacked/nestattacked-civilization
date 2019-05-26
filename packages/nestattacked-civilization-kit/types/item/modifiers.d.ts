interface FixModifiersAttributes {
  ModifierId: string;
  ModifierType: string;
  RunOnce?: boolean;
  NewOnly?: boolean;
  Permanent?: boolean;
  OwnerRequirementSetId?: string;
  SubjectRequirementSetId?: string;
  OwnerStackLimit?: number;
  SubjectStackLimit?: number;
}

interface FloatModifiersAttributes {
  ModifierId?: string;
  ModifierType?: string;
  RunOnce?: boolean;
  NewOnly?: boolean;
  Permanent?: boolean;
  OwnerRequirementSetId?: string;
  SubjectRequirementSetId?: string;
  OwnerStackLimit?: number;
  SubjectStackLimit?: number;
}

export function createModifiers(attributes: FixModifiersAttributes): void;
