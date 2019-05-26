interface FixTechnologyPrereqsAttributes {
  Technology: string;
  PrereqTech: string;
}

interface FloatTechnologyPrereqsAttributes {
  Technology?: string;
  PrereqTech?: string;
}

export function createTechnologyPrereqs(attributes: FixTechnologyPrereqsAttributes): void;
