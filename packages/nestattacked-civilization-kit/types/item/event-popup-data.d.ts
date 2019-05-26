interface FixEventPopupDataAttributes {
  Type: string;
  Title: string;
  Description?: string;
  BackgroundImage?: string;
  ForegroundImage?: string;
  Effects?: string;
  ImageText?: string;
  FilterCondition?: string;
  EffectType?: string;
}

interface FloatEventPopupDataAttributes {
  Type?: string;
  Title?: string;
  Description?: string;
  BackgroundImage?: string;
  ForegroundImage?: string;
  Effects?: string;
  ImageText?: string;
  FilterCondition?: string;
  EffectType?: string;
}

export function createEventPopupData(attributes: FixEventPopupDataAttributes): void;
