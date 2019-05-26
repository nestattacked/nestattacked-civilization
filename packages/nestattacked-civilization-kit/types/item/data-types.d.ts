interface FixDataTypesAttributes {
  TypeName: string;
  DataId: number;
}

interface FloatDataTypesAttributes {
  TypeName?: string;
  DataId?: number;
}

export function createDataTypes(attributes: FixDataTypesAttributes): void;
