interface FixStartErasAttributes {
  EraType: string;
  Gold?: number;
  Faith?: number;
  FirstTurnCivicChange?: boolean;
  StartingPopulationCapital?: number;
  StartingPopulationOtherCities?: number;
  GrowthRate?: number;
  ProductionRate?: number;
  DistrictProductionRate?: number;
  StartingMeleeStrengthMajor?: number;
  StartingMeleeStrengthMinor?: number;
  ObsoleteReligion?: boolean;
  Tiles?: number;
  Year: number;
  IgnoreGoodyHutTurn?: boolean;
  StartingRangedStrengthMajor?: number;
  StartingRangedStrengthMinor?: number;
  StartingAmenitiesCapital?: number;
  StartingHousingCapital?: number;
  StartingAmenitiesOtherCities?: number;
  StartingHousingOtherCities?: number;
}

interface FloatStartErasAttributes {
  EraType?: string;
  Gold?: number;
  Faith?: number;
  FirstTurnCivicChange?: boolean;
  StartingPopulationCapital?: number;
  StartingPopulationOtherCities?: number;
  GrowthRate?: number;
  ProductionRate?: number;
  DistrictProductionRate?: number;
  StartingMeleeStrengthMajor?: number;
  StartingMeleeStrengthMinor?: number;
  ObsoleteReligion?: boolean;
  Tiles?: number;
  Year?: number;
  IgnoreGoodyHutTurn?: boolean;
  StartingRangedStrengthMajor?: number;
  StartingRangedStrengthMinor?: number;
  StartingAmenitiesCapital?: number;
  StartingHousingCapital?: number;
  StartingAmenitiesOtherCities?: number;
  StartingHousingOtherCities?: number;
}

export function createStartEras(attributes: FixStartErasAttributes): void;
