interface FixCivilopediaSectionExcludesAttributes {
  SectionId: string;
}

interface FloatCivilopediaSectionExcludesAttributes {
  SectionId?: string;
}

export function createCivilopediaSectionExcludes(attributes: FixCivilopediaSectionExcludesAttributes): void;
