const screen = document.querySelector(".screen")
let screenValue = screen.innerHTML
let digits = 0

const ops = ["÷", "x", "-", "+"]
let isCalculated = false

let firstNumber = 0
let secondNumber = 0

document.querySelector(".buttons").addEventListener("mousedown", () => {
  switch (event.target.innerHTML) {
    case "C":
      refresh()
      break

    case "←":
      removeDigit()
      break

    case "÷":
      op = ops[0]
      firstNumber = Number(screenValue)
      refresh()
      break

    case "x":
      op = ops[1]
      firstNumber = Number(screenValue)
      refresh()
      break

    case "-":
      op = ops[2]
      firstNumber = Number(screenValue)
      refresh()
      break

    case "+":
      op = ops[3]
      firstNumber = Number(screenValue)
      refresh()
      break

    case "=":
      secondNumber = Number(screenValue)

      switch (op) {
        case ops[0]:
          screen.innerHTML = firstNumber / secondNumber
          break

        case ops[1]:
          screen.innerHTML = firstNumber * secondNumber
          break

        case ops[2]:
          screen.innerHTML = firstNumber - secondNumber
          break

        case ops[3]:
          screen.innerHTML = firstNumber + secondNumber
          break
      }
      isCalculated = true
      break

    default:
      appendDigit(event.target.innerHTML)
      break
  }
})

const removeDigit = () => {
  if (digits != 0) {
    const digitsArray = screen.innerHTML.split("")
    digitsArray.pop()
    digits -= 1

    if (digits === 0) refresh()
    else {
      screen.innerHTML = digitsArray.join("")
      screenValue = screen.innerHTML
    }
  }
}

const refresh = () => {
  screen.innerHTML = 0
  screenValue = 0
  digits = 0
}

const appendDigit = (number) => {
  if (isCalculated) {
    refresh()
    isCalculated = false
  }

  if (digits < 13) {
    if (screenValue == 0) screen.innerHTML = number
    else screen.innerHTML += number
    screenValue += number
    digits += 1
    return
  }

  alert("Digit limit is reached")
}
