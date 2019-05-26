interface FixPlayerColorsAttributes {
  Type: string;
  Usage: string;
  PrimaryColor: string;
  SecondaryColor: string;
  TextColor?: string;
}

interface FloatPlayerColorsAttributes {
  Type?: string;
  Usage?: string;
  PrimaryColor?: string;
  SecondaryColor?: string;
  TextColor?: string;
}

export function createPlayerColors(attributes: FixPlayerColorsAttributes): void;
