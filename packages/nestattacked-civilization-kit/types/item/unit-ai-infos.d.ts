interface FixUnitAiInfosAttributes {
  UnitType: string;
  AiType: string;
}

interface FloatUnitAiInfosAttributes {
  UnitType?: string;
  AiType?: string;
}

export function createUnitAiInfos(attributes: FixUnitAiInfosAttributes): void;
