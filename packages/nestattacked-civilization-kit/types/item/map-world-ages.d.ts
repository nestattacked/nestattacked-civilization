interface FixMapWorldAgesAttributes {
  MapWorldAgeType: string;
  Name: string;
  Description: string;
  YearsOld?: number;
  Scale?: number;
}

interface FloatMapWorldAgesAttributes {
  MapWorldAgeType?: string;
  Name?: string;
  Description?: string;
  YearsOld?: number;
  Scale?: number;
}

export function createMapWorldAges(attributes: FixMapWorldAgesAttributes): void;
