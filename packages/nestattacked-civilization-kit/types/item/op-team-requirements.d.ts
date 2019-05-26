interface FixOpTeamRequirementsAttributes {
  TeamName: string;
  AiType: string;
  MinNumber?: number;
  MaxNumber?: number;
  MinPercentage?: number;
  MaxPercentage?: number;
  ReconsiderWhilePreparing?: boolean;
  AiTypeDependence?: string;
}

interface FloatOpTeamRequirementsAttributes {
  TeamName?: string;
  AiType?: string;
  MinNumber?: number;
  MaxNumber?: number;
  MinPercentage?: number;
  MaxPercentage?: number;
  ReconsiderWhilePreparing?: boolean;
  AiTypeDependence?: string;
}

export function createOpTeamRequirements(attributes: FixOpTeamRequirementsAttributes): void;
