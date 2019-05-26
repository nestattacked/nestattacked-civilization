interface FixCivilopediaPageSearchTermsAttributes {
  SectionId: string;
  PageId: string;
  Term: string;
}

interface FloatCivilopediaPageSearchTermsAttributes {
  SectionId?: string;
  PageId?: string;
  Term?: string;
}

export function createCivilopediaPageSearchTerms(attributes: FixCivilopediaPageSearchTermsAttributes): void;
