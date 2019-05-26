interface FixNavigationPropertiesAttributes {
  BaseTable: string;
  PropertyName: string;
  TargetTable: string;
  IsCollection?: number;
  Query: string;
}

interface FloatNavigationPropertiesAttributes {
  BaseTable?: string;
  PropertyName?: string;
  TargetTable?: string;
  IsCollection?: number;
  Query?: string;
}

export function createNavigationProperties(attributes: FixNavigationPropertiesAttributes): void;
