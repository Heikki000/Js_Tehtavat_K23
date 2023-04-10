function rollDice(n) {
  number = Math.floor(Math.random() * n) + 1
  console.log(number)
  return +number;
}
let number
let sides = +prompt(`How many sided dice do you want to roll?`)
let uoList = `<ul>`

while (number != sides){
  rollDice(sides)
  uoList += `<li> ${number} </li>`
}

uoList += '</ul>'

document.querySelector('#target').innerHTML=uoList