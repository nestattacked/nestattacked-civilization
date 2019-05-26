interface FixUnitRebellionTagsAttributes {
  Tag: string;
  RebellionLevel: number;
  NumCreated?: number;
  ForbiddenTag?: string;
}

interface FloatUnitRebellionTagsAttributes {
  Tag?: string;
  RebellionLevel?: number;
  NumCreated?: number;
  ForbiddenTag?: string;
}

export function createUnitRebellionTags(attributes: FixUnitRebellionTagsAttributes): void;
