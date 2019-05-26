interface FixCivilizationLevelsAttributes {
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

interface FloatCivilizationLevelsAttributes {
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

export function createCivilizationLevels(attributes: FixCivilizationLevelsAttributes): void;
