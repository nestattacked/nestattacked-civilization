interface FixMapRainfallsAttributes {
  MapRainfallType: string;
  Name?: string;
  Description?: string;
  AverageAmountPerYear?: number;
  Scale?: number;
}

interface FloatMapRainfallsAttributes {
  MapRainfallType?: string;
  Name?: string;
  Description?: string;
  AverageAmountPerYear?: number;
  Scale?: number;
}

export function createMapRainfalls(attributes: FixMapRainfallsAttributes): void;
