# Introduce

developing, i'm trying to create a kit to write civilization 6 mod in typescript.

# How to develop

## install dependency

`yarn`

## lern bootstrap

`yarn bootstrap`

## start watching

`cd packages/nestattacked-civilization-kit && yarn dev`

## write code

now you can change code in `nestattacked-civilization-kit`, and test it in `nestattacked-civilization-game`.

# How to use

## install

`yarn add nestattacked-civilization-kit`

## config

create config file `ncconfig.json` in you project root directory. Refer to `Config Detail` section for more detail.

## write your code

todo

## compile

`yarn ncc`

## copy to mod folder

copy your outDir to mod folder of civilization 6.

# Config Detail

### rootDir

directory of you source code.

### outDir

where to output built files.

### modId

id represent your mod, like `9cb46ec2-59c1-4d9a-b317-884584ba117e`, it's guid. you can generate it [here](https://www.guidgenerator.com/online-guid-generator.aspx).

### name

name of your mod.

### description

description of your mod.

### teaser

teaser of your mod.
