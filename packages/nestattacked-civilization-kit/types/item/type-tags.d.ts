interface FixTypeTagsAttributes {
  Type: string;
  Tag: string;
}

interface FloatTypeTagsAttributes {
  Type?: string;
  Tag?: string;
}

export function createTypeTags(attributes: FixTypeTagsAttributes): void;
