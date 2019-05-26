interface FixCityNamesAttributes {
  ID: number;
  CivilizationType?: string;
  LeaderType?: string;
  ContinentType?: string;
  CityName: string;
  SortIndex?: number;
}

interface FloatCityNamesAttributes {
  ID?: number;
  CivilizationType?: string;
  LeaderType?: string;
  ContinentType?: string;
  CityName?: string;
  SortIndex?: number;
}

export function createCityNames(attributes: FixCityNamesAttributes): void;
