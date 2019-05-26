interface FixProjectGreatPersonPointsAttributes {
  ProjectType: string;
  GreatPersonClassType: string;
  Points?: number;
  PointProgressionModel?: string;
  PointProgressionParam1?: number;
}

interface FloatProjectGreatPersonPointsAttributes {
  ProjectType?: string;
  GreatPersonClassType?: string;
  Points?: number;
  PointProgressionModel?: string;
  PointProgressionParam1?: number;
}

export function createProjectGreatPersonPoints(attributes: FixProjectGreatPersonPointsAttributes): void;
