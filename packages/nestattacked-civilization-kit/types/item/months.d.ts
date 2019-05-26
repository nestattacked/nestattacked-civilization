interface FixMonthsAttributes {
  MonthType: string;
  Description: string;
}

interface FloatMonthsAttributes {
  MonthType?: string;
  Description?: string;
}

export function createMonths(attributes: FixMonthsAttributes): void;
