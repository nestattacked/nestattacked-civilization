interface FixLoadingInfoAttributes {
  LeaderType: string;
  ForegroundImage?: string;
  BackgroundImage?: string;
  EraText?: string;
  LeaderText?: string;
  PlayDawnOfManAudio?: boolean;
}

interface FloatLoadingInfoAttributes {
  LeaderType?: string;
  ForegroundImage?: string;
  BackgroundImage?: string;
  EraText?: string;
  LeaderText?: string;
  PlayDawnOfManAudio?: boolean;
}

export function createLoadingInfo(attributes: FixLoadingInfoAttributes): void;
