interface FixDefeatsAttributes {
  DefeatType: string;
  Name: string;
  Blurb: string;
  RequirementSetId: string;
  EnabledByDefault?: boolean;
  OneMoreTurn?: boolean;
  Global?: boolean;
}

interface FloatDefeatsAttributes {
  DefeatType?: string;
  Name?: string;
  Blurb?: string;
  RequirementSetId?: string;
  EnabledByDefault?: boolean;
  OneMoreTurn?: boolean;
  Global?: boolean;
}

export function createDefeats(attributes: FixDefeatsAttributes): void;
