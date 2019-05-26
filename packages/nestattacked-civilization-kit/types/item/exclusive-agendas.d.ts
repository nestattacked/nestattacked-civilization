interface FixExclusiveAgendasAttributes {
  AgendaOne: string;
  AgendaTwo: string;
}

interface FloatExclusiveAgendasAttributes {
  AgendaOne?: string;
  AgendaTwo?: string;
}

export function createExclusiveAgendas(attributes: FixExclusiveAgendasAttributes): void;
