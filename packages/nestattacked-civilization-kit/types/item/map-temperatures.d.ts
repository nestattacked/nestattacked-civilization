interface FixMapTemperaturesAttributes {
  MapTemperatureType: string;
  Name: string;
  Description: string;
  AverageStartingTemperature?: number;
  Scale?: number;
}

interface FloatMapTemperaturesAttributes {
  MapTemperatureType?: string;
  Name?: string;
  Description?: string;
  AverageStartingTemperature?: number;
  Scale?: number;
}

export function createMapTemperatures(attributes: FixMapTemperaturesAttributes): void;
