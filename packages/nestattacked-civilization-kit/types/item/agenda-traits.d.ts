interface FixAgendaTraitsAttributes {
  AgendaType: string;
  TraitType: string;
}

interface FloatAgendaTraitsAttributes {
  AgendaType?: string;
  TraitType?: string;
}

export function createAgendaTraits(attributes: FixAgendaTraitsAttributes): void;
