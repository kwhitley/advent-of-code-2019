const { 
  getInputs,
  getFuel, 
  getTotalFuel, 
  getFuelForTheAges, 
  getAllTheFuel,
  masses,
} = require('day-1')
const { greenBright } = require('chalk')

const testCases = [
  { mass: 12, fuel: 2, allthefuel: 2 },
  { mass: 14, fuel: 2, allthefuel: 2 },
  { mass: 1969, fuel: 654, allthefuel: 966 },
  { mass: 100756, fuel: 33583, allthefuel: 50346 },
]

describe('PART 1', () => {
  describe ('getFuel(module)', () => {
    for (var t of testCases) {
      it(`when given mass ${t.mass}, should get fuel of ${t.fuel}`, () => {
        expect(getFuel(t.mass)).toBe(t.fuel)
      })
    }
  })
  
  describe ('getTotalFuel(modules)', () => {
    const masses = testCases.map(m => m.mass)
    const fuels = testCases.map(m => m.fuel)
  
    const totalfuel = fuels.reduce((acc, f) => acc + f, 0)
  
    it(`adds fuel of masses`, () => {
      expect(getTotalFuel(masses)).toBe(totalfuel)
    })
  })

  describe('FINAL ANSWER', () => {
    it(greenBright(getTotalFuel(masses)), () => {
      expect(true).toBe(true)
    })
  })
})

describe('PART 2', () => {
  describe ('getFuelForTheAges(module)', () => {
    for (var t of testCases) {
      it(`when given mass ${t.mass}, should get fuel-of-fuels of ${t.allthefuel}`, () => {
        expect(getFuelForTheAges(t.mass)).toBe(t.allthefuel)
      })
    }
  })

  describe('FINAL ANSWER', () => {
    it(greenBright(getAllTheFuel(masses)), () => {
      expect(true).toBe(true)
    })
  })
})

