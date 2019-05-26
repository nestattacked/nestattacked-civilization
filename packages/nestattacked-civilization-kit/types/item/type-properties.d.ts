interface FixTypePropertiesAttributes {
  Type: string;
  Name: string;
  Value: string;
  PropertyType?: string;
}

interface FloatTypePropertiesAttributes {
  Type?: string;
  Name?: string;
  Value?: string;
  PropertyType?: string;
}

export function createTypeProperties(attributes: FixTypePropertiesAttributes): void;
