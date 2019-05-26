interface FixProjectPrereqsAttributes {
  ProjectType: string;
  PrereqProjectType: string;
  MinimumPlayerInstances: number;
}

interface FloatProjectPrereqsAttributes {
  ProjectType?: string;
  PrereqProjectType?: string;
  MinimumPlayerInstances?: number;
}

export function createProjectPrereqs(attributes: FixProjectPrereqsAttributes): void;
