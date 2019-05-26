interface FixCivilopediaSectionsAttributes {
  SectionId: string;
  Name: string;
  Icon?: string;
  SortIndex?: number;
}

interface FloatCivilopediaSectionsAttributes {
  SectionId?: string;
  Name?: string;
  Icon?: string;
  SortIndex?: number;
}

export function createCivilopediaSections(attributes: FixCivilopediaSectionsAttributes): void;
