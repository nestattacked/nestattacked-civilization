interface FixUnitNamesAttributes {
  ID: number;
  NameType: string;
  TextKey: string;
}

interface FloatUnitNamesAttributes {
  ID?: number;
  NameType?: string;
  TextKey?: string;
}

export function createUnitNames(attributes: FixUnitNamesAttributes): void;
