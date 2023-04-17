'use strict'
const calculationInput = document.getElementById("calculation");
const button = document.querySelector('button');
const resultOutput = document.getElementById("result");

button.addEventListener('click', calculateResult);

function calculateResult() {
  const calculation = calculationInput.value;
  let num1, num2, result;

  if (calculation.includes('+')) {
    [num1, num2] = calculation.split('+').map(Number)
    result = num1 + num2;
    } else if (calculation.includes('-')) {
    [num1, num2] = calculation.split('-').map(Number);
    result = num1 - num2;
    } else if (calculation.includes('*')) {
    [num1, num2] = calculation.split('*').map(Number);
    result = num1 * num2;
    } else if (calculation.includes('/')) {
    [num1, num2] = calculation.split('/').map(Number);
    result = num1 / num2;
    } else {
    result = 'Invalid calculation';
    }
    resultOutput.innerHTML = result;
}