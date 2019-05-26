interface FixRandomAgendasAttributes {
  AgendaType: string;
  GameLimit?: number;
}

interface FloatRandomAgendasAttributes {
  AgendaType?: string;
  GameLimit?: number;
}

export function createRandomAgendas(attributes: FixRandomAgendasAttributes): void;
