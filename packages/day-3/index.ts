import * as fs from 'fs-extra'

// inputs mapped from file
export const inputs:string[] =
  fs.readFileSync('./input.csv', 'utf-8')
    .trim()
    .split('\n')

export const createInstruction = (str:string):[number[], number] => {
  let isX = 'LR'.includes(str[0])
  let step = 'DL'.includes(str[0]) ? -1 : 1

  return [
    [ isX ? step : 0, !isX ? step : 0 ], // incrementer e.g. [-1,0]
    Number(str.slice(1)),                            // #times incrementer should be applied to pos
  ]
}

export const createWireMap = (wiredef:string) => {
  let instructions = wiredef.split(',').map(createInstruction)
  let positions = {}
  let [x, y, steps] = [0,0,0] // cursor

  for (var instruction of instructions) {
    let [incrementer, distance] = instruction
    let [xi, yi] = incrementer

    for (var i=0; i<distance; i++) {
      steps++
      x += xi
      y += yi

      let key = [x,y].join(',')
      positions[key] = positions[key] || steps
    }
  }

  return positions
}

export const getCollisions = (wiredefs:string[]) => {
  let wireMaps = wiredefs.map(createWireMap)

  return Object.keys(wireMaps[1]).reduce((col, pos) => {
    if (wireMaps[0][pos]) { // collision detected
      let [x, y] = pos.split(',').map(Number).map(Math.abs)
      col.push({
        steps: wireMaps[0][pos] + wireMaps[1][pos],
        distance: x + y,
      })
    }

    return col
  }, [])
}

export const getDistanceOfNearestCollision = (wiredefs:string[], type:string = 'distance') => {
  let collisions = getCollisions(wiredefs)
  let shortestDistance = Math.min(...collisions.map(c => c[type]))

  return shortestDistance
}