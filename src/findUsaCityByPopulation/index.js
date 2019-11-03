import usaCities from 'src/data/usaCities.json'

export default function index (numPeople) {
  const largestCity = usaCities[0]
  const smallestCity = usaCities[usaCities.length - 1]

  if (numPeople <= smallestCity.population) {
    return smallestCity
  } else if (numPeople >= largestCity.population) {
    return largestCity
  } else {
    let nextLargestCityIndex = 1

    while (numPeople <= usaCities[nextLargestCityIndex].population) {
      nextLargestCityIndex += 1
    }

    return findClosestPopulation(numPeople, usaCities[nextLargestCityIndex - 1], usaCities[nextLargestCityIndex])
  }
}

function findClosestPopulation (numPeople, cityA, cityB) {
  const diffA = Math.abs(cityA.population - numPeople)
  const diffB = Math.abs(cityB.population - numPeople)

  return diffA < diffB ? cityA : cityB
}
