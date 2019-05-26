interface FixImprovementTourismAttributes {
  ImprovementType: string;
  TourismSource?: string;
  PrereqCivic?: string;
  PrereqTech?: string;
  ScalingFactor?: number;
}

interface FloatImprovementTourismAttributes {
  ImprovementType?: string;
  TourismSource?: string;
  PrereqCivic?: string;
  PrereqTech?: string;
  ScalingFactor?: number;
}

export function createImprovementTourism(attributes: FixImprovementTourismAttributes): void;
