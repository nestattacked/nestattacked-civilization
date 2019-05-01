import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  DiplomaticActionType: string;
  Name?: string;
  Description?: string;
  CivilopediaKey?: string;
  InitiatorPrereqCivic?: string;
  InitiatorPrereqTech?: string;
  TargetPrereqCivic?: string;
  TargetPrereqTech?: string;
  InitiatorObsoleteCivic?: string;
  Cost?: number;
  RequiresCapitalPath?: boolean;
  RequiresConvertedCity?: boolean;
  RequiresOccupiedCity?: boolean;
  RequiresOccupiedFriendlyCity?: boolean;
  RequiresWarOnAlliedCityState?: boolean;
  RequiresLeadXEras?: number;
  RequiresArchaeologyIntrusion?: boolean;
  RequiresAdjacentEmpires?: boolean;
  RequiresEspionageIntrusion?: boolean;
  NoCurrentDelegation?: boolean;
  NoCurrentEmbassy?: boolean;
  NoCurrentOpenBorders?: boolean;
  NoCurrentDenunciation?: boolean;
  NoCurrentDOF?: boolean;
  NoCurrentResearchAgreement?: boolean;
  NoCurrentDefensivePact?: boolean;
  Agreement?: boolean;
  WarmongerPercent?: number;
  CaptureWarmongerPercent?: number;
  RazeWarmongerPercent?: number;
  UIGroup?: string;
  DenouncementTurnsRequired?: number;
  RequiresAlliance?: boolean;
  RequiresTeamMembership?: boolean;
  Duration?: number;
}

interface FloatAttributes {
  DiplomaticActionType?: string;
  Name?: string;
  Description?: string;
  CivilopediaKey?: string;
  InitiatorPrereqCivic?: string;
  InitiatorPrereqTech?: string;
  TargetPrereqCivic?: string;
  TargetPrereqTech?: string;
  InitiatorObsoleteCivic?: string;
  Cost?: number;
  RequiresCapitalPath?: boolean;
  RequiresConvertedCity?: boolean;
  RequiresOccupiedCity?: boolean;
  RequiresOccupiedFriendlyCity?: boolean;
  RequiresWarOnAlliedCityState?: boolean;
  RequiresLeadXEras?: number;
  RequiresArchaeologyIntrusion?: boolean;
  RequiresAdjacentEmpires?: boolean;
  RequiresEspionageIntrusion?: boolean;
  NoCurrentDelegation?: boolean;
  NoCurrentEmbassy?: boolean;
  NoCurrentOpenBorders?: boolean;
  NoCurrentDenunciation?: boolean;
  NoCurrentDOF?: boolean;
  NoCurrentResearchAgreement?: boolean;
  NoCurrentDefensivePact?: boolean;
  Agreement?: boolean;
  WarmongerPercent?: number;
  CaptureWarmongerPercent?: number;
  RazeWarmongerPercent?: number;
  UIGroup?: string;
  DenouncementTurnsRequired?: number;
  RequiresAlliance?: boolean;
  RequiresTeamMembership?: boolean;
  Duration?: number;
}

const DiplomaticActions: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'DiplomaticActions'
);

export { DiplomaticActions };
