import * as fs from 'fs-extra'

// inputs mapped from file
export const inputs:number[] =
  fs.readFileSync('./input.csv', 'utf-8')
    .split('-')
    .map(Number)

// determines if a password is valid
export function isValidPassword(strValue:string, part2:boolean = false):boolean {
  for (var i=0; i<strValue.length-1; i++) {
    if (strValue[i] > strValue[i+1]) return false
  }

  const pairMatches = strValue.match(/(\d)\1+/gi) || []

  return part2
    ? Math.min(...pairMatches.map(v => v.length)) === 2 // must also have pair of digits
    : Boolean(pairMatches.length)
}

// determines how many valid passwords between min and max
export function howManyPasswordsBetween(min:number, max:number, part2:boolean = false):number {
  for (var value=min, valid=0; value<=max; value++) {
    valid += (isValidPassword(`${value}`, part2) ? 1 : 0)
  }

  return valid
}