const {
  inputs,
  execute,
  restoreGravityAssistProgram,
} = require('day-2')
const { greenBright, yellowBright } = require('chalk')

const testCases = [
  { 
    inputs: [1,0,0,0,99],
    outputs: [2,0,0,0,99],
  },
  { 
    inputs: [2,3,0,3,99],
    outputs: [2,3,0,6,99],
  },
  { 
    inputs: [2,4,4,5,99,0],
    outputs: [2,4,4,5,99,9801],
  },
  { 
    inputs: [1,1,1,4,99,5,6,0,99],
    outputs: [30,1,1,4,2,5,6,0,99],
  },
  { 
    inputs: [1,9,10,3,2,3,11,0,99,30,40,50],
    outputs: [
      3500,9,10,70,
      2,3,11,0,
      99,
      30,40,50
    ]
  },
]

describe('PART 1', () => {
  describe ('execute(sequence)', () => {
    for (var t of testCases) {
      it(`when given inputs ${t.inputs}, should return output of ${t.outputs}`, () => {
        expect(execute([...t.inputs])).toStrictEqual(t.outputs)
      })
    }
  })
  
  describe('FINAL ANSWER', () => {
    const sequence = execute(restoreGravityAssistProgram([...inputs]))

    it(greenBright(sequence[0]), () => {
      expect(true).toBe(true)
    })
  })
})

describe('PART 2', () => {
  describe('FINAL ANSWER', () => {
    nounLoop: for (var noun=0; noun<100; noun++) {
      verbLoop: for (var verb=0; verb<100; verb++) {
        let s = execute(restoreGravityAssistProgram([...inputs], noun, verb))
        
        if (s[0] === 19690720) break nounLoop
      }
    }

    it(`noun:${yellowBright(noun)} * 100 + verb:${yellowBright(verb)} = ${greenBright(100 * noun + verb)}`, () => {
      expect(true).toBe(true)
    })
  })
})
