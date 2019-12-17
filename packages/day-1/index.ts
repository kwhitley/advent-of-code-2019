import * as fs from 'fs-extra'
import { green } from 'chalk'

export const getFuel = (mass:number):number => 
  Math.max(Math.floor(mass / 3) - 2, 0)

  export const getFuelForTheAges = (mass:number):number => {
  const fuel = getFuel(mass)

  return fuel
    ? fuel + getFuelForTheAges(fuel)
    : fuel
}

export const getTotalFuel = (masses:number[]):number => 
  masses.reduce((acc, mass) => acc + getFuel(mass), 0)

export const getAllTheFuel = (masses:number[]):number => 
  masses.reduce((acc, mass) => acc + getFuelForTheAges(mass), 0)

export const masses:number[] =
  fs.readFileSync('./input.csv', 'utf-8')
    .trim()
    .split('\n')
    .map(Number)
