interface FixHistoricalAgendasAttributes {
  LeaderType: string;
  AgendaType: string;
}

interface FloatHistoricalAgendasAttributes {
  LeaderType?: string;
  AgendaType?: string;
}

export function createHistoricalAgendas(attributes: FixHistoricalAgendasAttributes): void;
