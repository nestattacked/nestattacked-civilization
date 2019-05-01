import { Types } from 'nestattacked-civilization-kit';

Types.create({
  Type: 'BUILDING_GAME_STUDIO',
  Kind: 'KIND_BUILDING'
});

Types.delete({
  Type: 'BUILDING_ARENA',
  Kind: 'KIND_BUILDING'
});

Types.update(
  {
    Type: 'BUILDING_ARENA'
  },
  {
    Kind: 'KIND_BUILDING'
  }
);
