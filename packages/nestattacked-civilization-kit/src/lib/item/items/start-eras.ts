import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
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

interface FloatAttributes {
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

const StartEras: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'StartEras'
);

export { StartEras };
