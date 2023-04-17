'use strict'
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const button = document.querySelector('button');
const resultOutput = document.getElementById("result");

button.addEventListener('click', calculateResult);

function calculateResult() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const choice = document.getElementById("operation").value;
  let result;

  if (choice === "add") {
    result = num1 + num2;
  } else if (choice === "sub") {
    result = num1 - num2;
  } else if (choice === "multi") {
    result = num1 * num2;
  } else if (choice === "div") {
    result = num1 / num2;
  }
    resultOutput.innerHTML = result;
}

/*const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const button = document.querySelector('button');
const num1 = parseFloat(num1Input.value);
const num2 = parseFloat(num2Input.value);
const choice = document.getElementById("operation").value
button.addEventListener('click', choice);

function add() {
  let result = num1 + num2;
}
function sub() {
  let result = num1 - num2;
}
function multi() {
  let result = num1 * num2;
}
function div() {
  let result = num1 / num2;
}
let result
console.log(choice)
button.addEventListener('click', choice)
document.getElementById("result").innerHTML = result; */

