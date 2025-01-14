/* script.js */
let currentNumber = '';
let previousNumber = '';
let operator = '';

function appendNumber(number) {
  if (number === '.' && currentNumber.includes('.')) return;
  currentNumber += number;
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.innerText = currentNumber || '0';
}

function clearDisplay() {
  currentNumber = '';
  previousNumber = '';
  operator = '';
  updateDisplay();
}

function chooseOperator(op) {
  if (currentNumber === '') return;
  if (previousNumber !== '') calculate();
  operator = op;
  previousNumber = currentNumber;
  currentNumber = '';
}

function calculate() {
  let result;
  const prev = parseFloat(previousNumber);
  const curr = parseFloat(currentNumber);

  if (isNaN(prev) || isNaN(curr)) return;

  switch (operator) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '/':
      result = prev / curr;
      break;
    default:
      return;
  }

  currentNumber = result;
  operator = '';
  previousNumber = '';
  updateDisplay();
}
