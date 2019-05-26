interface FixReligionsAttributes {
  ReligionType: string;
  Name: string;
  IconString: string;
  Pantheon?: boolean;
  RequiresCustomName?: boolean;
  Color: string;
}

interface FloatReligionsAttributes {
  ReligionType?: string;
  Name?: string;
  IconString?: string;
  Pantheon?: boolean;
  RequiresCustomName?: boolean;
  Color?: string;
}

export function createReligions(attributes: FixReligionsAttributes): void;
