interface FixGreatWorksAttributes {
  GreatWorkType: string;
  GreatWorkObjectType: string;
  GreatPersonIndividualType?: string;
  Name: string;
  Audio?: string;
  Image?: string;
  Quote?: string;
  Tourism?: number;
  EraType?: string;
}

interface FloatGreatWorksAttributes {
  GreatWorkType?: string;
  GreatWorkObjectType?: string;
  GreatPersonIndividualType?: string;
  Name?: string;
  Audio?: string;
  Image?: string;
  Quote?: string;
  Tourism?: number;
  EraType?: string;
}

export function createGreatWorks(attributes: FixGreatWorksAttributes): void;
