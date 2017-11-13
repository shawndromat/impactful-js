import findUsaCityByPopulation from './findUsaCityByPopulation'

const location = findUsaCityByPopulation(400000)
console.log(`${location.city}, ${location.state}`)
