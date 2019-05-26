interface FixCivilopediaPageExcludesAttributes {
  SectionId: string;
  PageId: string;
}

interface FloatCivilopediaPageExcludesAttributes {
  SectionId?: string;
  PageId?: string;
}

export function createCivilopediaPageExcludes(attributes: FixCivilopediaPageExcludesAttributes): void;
