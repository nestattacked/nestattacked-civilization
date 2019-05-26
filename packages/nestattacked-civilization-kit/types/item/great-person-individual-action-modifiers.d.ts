interface FixGreatPersonIndividualActionModifiersAttributes {
  GreatPersonIndividualType: string;
  ModifierId: string;
  AttachmentTargetType?: string;
}

interface FloatGreatPersonIndividualActionModifiersAttributes {
  GreatPersonIndividualType?: string;
  ModifierId?: string;
  AttachmentTargetType?: string;
}

export function createGreatPersonIndividualActionModifiers(attributes: FixGreatPersonIndividualActionModifiersAttributes): void;
