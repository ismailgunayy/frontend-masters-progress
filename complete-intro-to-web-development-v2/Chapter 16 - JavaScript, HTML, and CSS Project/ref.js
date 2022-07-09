let runningTotal = 0
let buffer = "0"
let previousOperator = null
const screen = document.querySelector(".screen")

document.querySelector(".buttons").addEventListener("click", (event) => {
  buttonClick(event.target.innerText)
})

const buttonClick = (value) => {
  if (isNaN(parseInt(value))) {
    handleSymbol(value)
  } else {
    handleNumber(value)
  }
  rerender()
}

const handleSymbol = (value) => {
  switch (value) {
    case "C":
      buffer = "0"
      runningTotal = 0
      previousOperator = null
      break

    case "=":
      if (previousOperator === null) {
        return
      }
      flushOperation(parseInt(buffer))
      buffer = "" + runningTotal
      runningTotal = 0
      previousOperator = null
      break

    case "←":
      if (buffer.length !== 1) {
        buffer = buffer.substring(0, buffer.length - 1)
      }
      break;

    default:
      handleMath(value)
      break
  }
}

const handleNumber = (value) => {
  if (buffer === "0") {
    buffer = value
  } else {
    buffer += value
  }
}

const handleMath = (value) => {
  const intBuffer = parseInt(buffer)

  if (runningTotal === 0) {
    runningTotal = intBuffer
  } else {
    flushOperation(intBuffer)
  }

  previousOperator = value
  buffer = "0"
}

const flushOperation = (intBuffer) => {
  if (previousOperator === "+") {
    runningTotal += intBuffer
  } else if (previousOperator === "-") {
    runningTotal -= intBuffer
  } else if (previousOperator === "x") {
    runningTotal *= intBuffer
  } else {
    runningTotal /= intBuffer
  }
}

const rerender = () => {
  screen.innerText = buffer
}
