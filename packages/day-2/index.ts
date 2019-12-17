import * as fs from 'fs-extra'

export const inputs:number[] =
  fs.readFileSync('./input.csv', 'utf-8')
    .trim()
    .split(',')
    .map(Number)

export function execute(sequence:number[], cursor:number = 0):number[] {
 let [ command, a, b, target ] = sequence.slice(cursor, cursor += 4)

  if (command === 99) return sequence

  sequence[target] = command === 1 
    ? sequence[a] + sequence[b] 
    : sequence[a] * sequence[b]

  return execute(sequence, cursor)
}

export function restoreGravityAssistProgram(sequence:number[]):number[] {
  sequence[1] = 12
  sequence[2] = 2
  
  return sequence
}