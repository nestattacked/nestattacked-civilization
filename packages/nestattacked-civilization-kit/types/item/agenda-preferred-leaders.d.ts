interface FixAgendaPreferredLeadersAttributes {
  AgendaType: string;
  LeaderType: string;
  PercentageChance?: number;
}

interface FloatAgendaPreferredLeadersAttributes {
  AgendaType?: string;
  LeaderType?: string;
  PercentageChance?: number;
}

export function createAgendaPreferredLeaders(attributes: FixAgendaPreferredLeadersAttributes): void;
