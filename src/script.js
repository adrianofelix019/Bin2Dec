function calculate() {
  const result = document.querySelector('#result-container')
  const binNumber = String(document.querySelector('#bin').value)

  if (validateInput(binNumber)) {
    result.innerHTML = `<p>${binaryToDecimal(reverse(binNumber))}</p>`
  }
}

function binaryToDecimal(binaryString) {
  let decimal = '0'

  for (let i = 0; i < binaryString.length; i++) {
    decimal = String(Number(decimal) + Number(binaryString[i] * 2 ** i))
  }

  return decimal
}

function validateInput(input) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== '0' && input[i] !== '1') {
      alert('Please enter binary digits only')
      return false
    }
  }

  return true
}

function reverse(num) {
  return num.split('').reverse().join('')
}
