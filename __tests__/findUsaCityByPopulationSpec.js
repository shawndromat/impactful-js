import findUsaCityByPopulation from '../src/findUsaCityByPopulation'

describe('findUsaCityByPopulation', () => {
  let location

  describe('when given a population lower than the lowest population', () => {
    beforeEach(() => { location = findUsaCityByPopulation(0) })

    it('returns the smallest city', () => {
      expect(location.city).toEqual('Panama City')
      expect(location.population).toEqual(36877)
    })
  })

  describe('when given a population higher than the highest population', () => {
    const largestInt = 2147483647
    beforeEach(() => { location = findUsaCityByPopulation(largestInt + 1) })

    it('returns the largest city', () => {
      expect(location.city).toEqual('New York')
      expect(location.population).toEqual(8405837)
    })
  })

  describe('when given a population exactly equal to a city', () => {
    it('returns the matching city', () => {
      expect(findUsaCityByPopulation(8405837).city).toEqual('New York')
      expect(findUsaCityByPopulation(69976).city).toEqual('Santa Fe')
      expect(findUsaCityByPopulation(36877).city).toEqual('Panama City')
      expect(findUsaCityByPopulation(998537).city).toEqual('San Jose')
    })
  })

  describe('when given a population that does NOT exactly match', () => {
    beforeEach(() => { location = findUsaCityByPopulation(69785) })

    it('returns the nearest city', () => {
      expect(location.city).toEqual('Milpitas')
      expect(location.population).toEqual(69783)
    })
  })
})
