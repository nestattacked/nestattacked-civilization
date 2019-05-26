interface FixTagsAttributes {
  Tag: string;
  Vocabulary: string;
}

interface FloatTagsAttributes {
  Tag?: string;
  Vocabulary?: string;
}

export function createTags(attributes: FixTagsAttributes): void;
