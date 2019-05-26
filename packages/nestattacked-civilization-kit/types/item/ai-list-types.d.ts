interface FixAiListTypesAttributes {
  ListType: string;
}

interface FloatAiListTypesAttributes {
  ListType?: string;
}

export function createAiListTypes(attributes: FixAiListTypesAttributes): void;
