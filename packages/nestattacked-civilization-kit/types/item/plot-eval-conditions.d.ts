interface FixPlotEvalConditionsAttributes {
  ConditionType: string;
  Value: number;
}

interface FloatPlotEvalConditionsAttributes {
  ConditionType?: string;
  Value?: number;
}

export function createPlotEvalConditions(attributes: FixPlotEvalConditionsAttributes): void;
