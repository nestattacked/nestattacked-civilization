interface FixMapResourceDistributionsAttributes {
  MapResourceDistributionType: string;
  Name: string;
  Description: string;
  Scale?: number;
}

interface FloatMapResourceDistributionsAttributes {
  MapResourceDistributionType?: string;
  Name?: string;
  Description?: string;
  Scale?: number;
}

export function createMapResourceDistributions(attributes: FixMapResourceDistributionsAttributes): void;
