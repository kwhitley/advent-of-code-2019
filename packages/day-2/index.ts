import * as fs from 'fs-extra'

// inputs mapped from file
export const inputs:number[] =
  fs.readFileSync('./input.csv', 'utf-8')
    .trim()
    .split(',')
    .map(Number)

// simple addition and multiplication as per Part 1 instructions
export function executeSimple(sequence:number[], cursor:number = 0):number[] {
  let [ command, a, b, target ] = sequence.slice(cursor, cursor += 4)

  if (command === 99) return sequence

  sequence[target] = command === 1 
    ? sequence[a] + sequence[b] 
    : sequence[a] * sequence[b]

  return execute(sequence, cursor)
}

// current available instructions
const instructions = {
  1: {
    type: 'add',
    params: 3, 
    fn: (s:number[], a:number, b:number, target:number) => s[target] = s[a] + s[b]
  },
  2: {
    type: 'multiply',
    params: 3, 
    fn: (s:number[], a:number, b:number, target:number) => s[target] = s[a] * s[b]
  },
}

// flexible instruction operator, as per Part 2 instructions
export function execute(sequence:number[], cursor:number = 0, command?:number):number[] {
  if ((command = sequence[cursor++]) === 99) return sequence
  
  let instruction = instructions[command]
  let params = sequence.slice(cursor, cursor += instruction.params)

  instruction.fn(sequence, ...params)
  
  return execute(sequence, cursor)
}

export function restoreGravityAssistProgram(
  sequence:number[], 
  noun:number = 12, 
  verb:number = 2,
):number[] {
  sequence[1] = noun
  sequence[2] = verb
  
  return sequence
}