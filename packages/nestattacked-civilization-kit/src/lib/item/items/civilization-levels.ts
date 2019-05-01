import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  CivilizationLevelType: string;
  CanFoundCities: boolean;
  CanAnnexTilesWithCulture: boolean;
  CanAnnexTilesWithGold: boolean;
  CanAnnexTilesWithReceivedInfluence: boolean;
  CanEarnGreatPeople: boolean;
  CanGiveInfluence: boolean;
  CanReceiveInfluence: boolean;
  StartingTilesForCity: number;
  CanBuildWonders: boolean;
  IgnoresUnitStrategicResourceRequirements?: boolean;
}

interface FloatAttributes {
  CivilizationLevelType?: string;
  CanFoundCities?: boolean;
  CanAnnexTilesWithCulture?: boolean;
  CanAnnexTilesWithGold?: boolean;
  CanAnnexTilesWithReceivedInfluence?: boolean;
  CanEarnGreatPeople?: boolean;
  CanGiveInfluence?: boolean;
  CanReceiveInfluence?: boolean;
  StartingTilesForCity?: number;
  CanBuildWonders?: boolean;
  IgnoresUnitStrategicResourceRequirements?: boolean;
}

const CivilizationLevels: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'CivilizationLevels'
);

export { CivilizationLevels };
