interface FixCivilopediaPageGroupExcludesAttributes {
  SectionId: string;
  PageGroupId: string;
}

interface FloatCivilopediaPageGroupExcludesAttributes {
  SectionId?: string;
  PageGroupId?: string;
}

export function createCivilopediaPageGroupExcludes(attributes: FixCivilopediaPageGroupExcludesAttributes): void;
