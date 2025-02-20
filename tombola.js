function generaNumeriTombola() {
  const numbers = []
  for (let i = 1; i <= 90; i++) {
    numbers.push(i)
  }
  return numbers
}

const numbers = generaNumeriTombola()
let extractedNumbers = []

const Button = document.getElementById("button")
const currentNumber = document.getElementById("currentNumber")
const board = document.getElementById("board")

for (let i = 1; i <= 90; i++) {
  const cell = document.createElement("div")
  cell.classList.add("cell")
  cell.textContent = i
  cell.id = `num-${i}`
  board.appendChild(cell)
}

Button.addEventListener("click", () => {
  if (numbers.length === 0) {
    alert("Tutti i numeri sono stati estratti!")
    return
  }

  const randomIndex = Math.floor(Math.random() * numbers.length)
  const extractedNumber = numbers.splice(randomIndex, 1)[0]

  extractedNumbers.push(extractedNumber)
  currentNumber.textContent = extractedNumber
  document.getElementById(`num-${extractedNumber}`).classList.add("selected")
})
