interface FixProjectCompletionModifiersAttributes {
  ProjectType: string;
  ModifierId: string;
}

interface FloatProjectCompletionModifiersAttributes {
  ProjectType?: string;
  ModifierId?: string;
}

export function createProjectCompletionModifiers(attributes: FixProjectCompletionModifiersAttributes): void;
