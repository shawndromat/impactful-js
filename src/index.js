import findUsaCityByPopulation from './findUsaCityByPopulation'

const form = document.getElementById('number-form')
const numberInput = document.getElementById('number-input')
const answerDiv = document.getElementById('answer')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const location = findUsaCityByPopulation(numberInput.value)
  answerDiv.innerHTML = `${location.city}, ${location.state}`
})