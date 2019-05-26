interface FixColorsAttributes {
  Type: string;
  Color?: string;
  Red?: number;
  Green?: number;
  Blue?: number;
  Alpha?: number;
}

interface FloatColorsAttributes {
  Type?: string;
  Color?: string;
  Red?: number;
  Green?: number;
  Blue?: number;
  Alpha?: number;
}

export function createColors(attributes: FixColorsAttributes): void;
