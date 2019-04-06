import { Type } from 'nestattacked-civilization-kit';

Type.create({
  Type: 'BUILDING_GAME_STUDIO',
  Kind: 'KIND_BUILDING'
});

Type.delete({
  Type: 'BUILDING_ARENA',
  Kind: 'KIND_BUILDING'
});

Type.update(
  {
    Type: 'BUILDING_ARENA'
  },
  {
    Kind: 'KIND_BUILDING'
  }
);
