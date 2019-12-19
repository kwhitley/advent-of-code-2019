const { 
  inputs,
  isValidPassword,
  howManyPasswordsBetween
} = require('day-4')
const { greenBright, yellowBright, whiteBright, redBright } = require('chalk')

describe('PART 1', () => {
  const testCases = [
    { input: '112233', valid: true },
    { input: '123444', valid: true },
    { input: '111122', valid: true },
    { input: '111111', valid: true },
    { input: '223450', valid: false },
    { input: '123789', valid: false },
    { input: '222211', valid: false },
  ]

  describe('isValidPassword(password, part2=false)', () => {
    for (var test of testCases) {
      let isValid = isValidPassword(test.input)
      const { input, valid } = test

      it(`${input} should ${valid ? '' : redBright('NOT ')}be valid`, () => {
        expect(isValid).toBe(valid)
      })
    }
  })

  describe('howManyPasswordsBetween(a, b)', () => {
    const testCases = [
      {
        range: [11,22],
        passwords: 2,
      },
      { 
        range: [11,33],
        passwords: 3,
      },
      { 
        range: [111,333],
        passwords: 33,
      },
      { 
        range: [11111,99999],
        passwords: 1161,
      },
    ]

    for (var test of testCases) {
      it(`should find ${yellowBright(test.passwords)} passwords between ${yellowBright(test.range.join('-'))}`, () => {
        expect(howManyPasswordsBetween(...test.range)).toBe(test.passwords)
      })
    }
  })

  describe(`FINAL: How many passwords between ${inputs.join('-')}`, () => {
    it(greenBright(howManyPasswordsBetween(...inputs)), () => {
      expect(true).toBe(true)
    })
  })
})

describe('PART 2', () => {
  const testCases = [
    { input: '112233', valid: true },
    { input: '123444', valid: false },
    { input: '111122', valid: true },
    { input: '111111', valid: false },
    { input: '223450', valid: false },
    { input: '123789', valid: false },
    { input: '222211', valid: false },
    { input: '22222', valid: false },
  ]

  describe('isValidPassword(password, part2=true)', () => {
    for (var test of testCases) {
      let isValid = isValidPassword(test.input, true)
      const { input, valid } = test

      it(`${input} should ${valid ? '' : redBright('NOT ')}be valid`, () => {
        expect(isValid).toBe(valid)
      })
    }
  })
  
  describe(`FINAL: How many passwords between ${inputs.join('-')} with no triples or beyond`, () => {
    it(greenBright(howManyPasswordsBetween(...inputs, true)), () => {
      expect(true).toBe(true)
    })
  })
})