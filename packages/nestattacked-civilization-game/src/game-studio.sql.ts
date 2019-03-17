import {
  Type,
  Building,
  BuildingGreatPersonPoint,
  BuildingYieldChange,
  IconDefinition,
  LocalizedText
} from 'nestattacked-civilization-kit';

Type.create([
  {
    Type: 'BUILDING_GAME_STUDIO',
    Kind: 'KIND_BUILDING'
  }
]);

Building.create([
  {
    BuildingType: 'BUILDING_GAME_STUDIO',
    Name: 'LOC_BUILDING_GAME_STUDIO_NAME',
    PrereqDistrict: 'DISTRICT_CITY_CENTER',
    PurchaseYield: 'YIELD_GOLD',
    Cost: 100,
    AdvisorType: 'ADVISOR_GENERIC'
  }
]);

BuildingYieldChange.create([
  {
    BuildingType: 'BUILDING_GAME_STUDIO',
    YieldChange: 5,
    YieldType: 'YIELD_CULTURE'
  }
]);

BuildingGreatPersonPoint.create([
  {
    BuildingType: 'BUILDING_GAME_STUDIO',
    GreatPersonClassType: 'GREAT_PERSON_CLASS_ARTIST',
    PointsPerTurn: 1
  },
  {
    BuildingType: 'BUILDING_GAME_STUDIO',
    GreatPersonClassType: 'GREAT_PERSON_CLASS_ENGINEER',
    PointsPerTurn: 1
  },
  {
    BuildingType: 'BUILDING_GAME_STUDIO',
    GreatPersonClassType: 'GREAT_PERSON_CLASS_MUSICIAN',
    PointsPerTurn: 1
  },
  {
    BuildingType: 'BUILDING_GAME_STUDIO',
    GreatPersonClassType: 'GREAT_PERSON_CLASS_WRITER',
    PointsPerTurn: 1
  }
]);

IconDefinition.create([
  {
    Name: 'ICON_BUILDING_GAME_STUDIO',
    Atlas: 'ICON_ATLAS_BUILDINGS',
    Index: 26
  }
]);

LocalizedText.create([
  {
    Tag: 'LOC_BUILDING_GAME_STUDIO_NAME',
    Language: 'en_US',
    Text: 'Game Studio'
  },
  {
    Tag: 'LOC_BUILDING_GAME_STUDIO_DESCRIPTION',
    Language: 'en_US',
    Text:
      "A game studio is a place that makes games, like the one you're playing this very moment!"
  },
  {
    Tag: 'LOC_PEDIA_BUILDINGS_PAGE_BUILDING_GAME_STUDIO_CHAPTER_HISTORY_PARA_1',
    Language: 'en_US',
    Text:
      'A long long time ago in a place not so far, a great designer by the name of Sid Meier founded a game studio...'
  }
]);
