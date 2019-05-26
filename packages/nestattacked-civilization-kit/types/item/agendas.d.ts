interface FixAgendasAttributes {
  AgendaType: string;
  OperationList?: string;
  Name: string;
  Description: string;
}

interface FloatAgendasAttributes {
  AgendaType?: string;
  OperationList?: string;
  Name?: string;
  Description?: string;
}

export function createAgendas(attributes: FixAgendasAttributes): void;
