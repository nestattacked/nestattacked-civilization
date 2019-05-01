import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
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

interface FloatAttributes {
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

const EventPopupData: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'EventPopupData'
);

export { EventPopupData };
