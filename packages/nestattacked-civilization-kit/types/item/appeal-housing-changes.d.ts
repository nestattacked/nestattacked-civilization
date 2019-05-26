interface FixAppealHousingChangesAttributes {
  DistrictType: string;
  MinimumValue: number;
  AppealChange: number;
  Description: string;
}

interface FloatAppealHousingChangesAttributes {
  DistrictType?: string;
  MinimumValue?: number;
  AppealChange?: number;
  Description?: string;
}

export function createAppealHousingChanges(attributes: FixAppealHousingChangesAttributes): void;
