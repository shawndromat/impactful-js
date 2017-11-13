import findUsaCityByPopulation from './findUsaCityByPopulation'

const location = findUsaCityByPopulation(400000)
const locationString = `${location.city}, ${location.state}`
console.log(locationString)
document.getElementById('answer').innerHTML = locationString
