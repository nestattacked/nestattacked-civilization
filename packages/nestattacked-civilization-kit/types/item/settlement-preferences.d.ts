interface FixSettlementPreferencesAttributes {
  PreferenceType: string;
}

interface FloatSettlementPreferencesAttributes {
  PreferenceType?: string;
}

export function createSettlementPreferences(attributes: FixSettlementPreferencesAttributes): void;
