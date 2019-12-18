const { 
  inputs,
  createInstruction,
  getWire,
  getIncrementers,
  createWireMap,
  getCollisions,
  getDistanceOfNearestCollision,
} = require('day-3')
const { greenBright, yellowBright } = require('chalk')

const testCases = [
  {
    inputs: [
      'R8,U5,L5,D3',
      'U7,R6,D4,L4',
    ],
    distance: 6,
    steps: 30,
  },
  { 
    inputs: [
      'R75,D30,R83,U83,L12,D49,R71,U7,L72',
      'U62,R66,U55,R34,D71,R55,D58,R83',
    ],
    distance: 159,
    steps: 610,
  },
  { 
    inputs: [
      'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51',
      'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7',
    ],
    distance: 135,
    steps: 410,
  },
]

describe('PART 1', () => {
  describe('createInstruction(str):number[]', () => {
    const instructions = [
      { 
        input: 'R75',
        expect: [[1,0], 75],
      },
      { 
        input: 'L75',
        expect: [[-1,0], 75],
      },
      { 
        input: 'U75',
        expect: [[0,1], 75],
      },
      { 
        input: 'D75',
        expect: [[0,-1], 75],
      },
    ]

    for (var instruction of instructions) {
      it(`should turn ${instruction.input} into [${JSON.stringify(instruction.expect)}]`, () => {
        expect(createInstruction(instruction.input)).toEqual(instruction.expect)
      })
    }
  })

  describe('getDistanceOfNearestCollision() [type=distance]', () => {
    for (var test of testCases) {
      it(`should get distance of ${yellowBright(test.distance)} from ${JSON.stringify(test.inputs)}`, () => {
        let nearest = getDistanceOfNearestCollision(test.inputs)
        
        expect(nearest).toBe(test.distance)
      })
    }
  })
  
  describe('FINAL ANSWER', () => {
    const distance = getDistanceOfNearestCollision(inputs)

    it(greenBright(distance), () => {
      expect(true).toBe(true)
    })
  })
})

describe('Part 2', () => {
  describe('getDistanceOfNearestCollision() [type=steps]', () => {
    for (var test of testCases) {
      it(`should get steps of ${yellowBright(test.steps)} from ${JSON.stringify(test.inputs)}`, () => {
        let nearest = getDistanceOfNearestCollision(test.inputs, 'steps')
        
        expect(nearest).toBe(test.steps)
      })
    }
  })
  
  describe('FINAL ANSWER', () => {
    const distance = getDistanceOfNearestCollision(inputs, 'steps')
    
    it(greenBright(distance), () => {
      expect(true).toBe(true)
    })
  })
})
