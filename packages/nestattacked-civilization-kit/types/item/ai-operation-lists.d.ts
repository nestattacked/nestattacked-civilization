interface FixAiOperationListsAttributes {
  ListType: string;
  BaseList?: string;
}

interface FloatAiOperationListsAttributes {
  ListType?: string;
  BaseList?: string;
}

export function createAiOperationLists(attributes: FixAiOperationListsAttributes): void;
