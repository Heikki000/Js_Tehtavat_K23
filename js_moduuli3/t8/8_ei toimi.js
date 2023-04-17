const num1Input = document.getElementById("num1");
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
document.getElementById("result").innerHTML = result;

