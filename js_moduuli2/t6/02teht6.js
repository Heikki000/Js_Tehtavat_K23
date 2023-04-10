`Write a function that returns a random dice roll between 1 and 6.
The function should not have any parameters. Write a main program that rolls the dice until the result is 6.
The main program should print out the result of each roll in an unordered list (<ul>). (2p)`

function rollDice() {
  number = Math.floor(Math.random() * 6) + 1
  console.log(number)
  return +number;
}
let number
let uoList = `<ul>`

while (number != 6){
  rollDice()
  uoList += `<li> ${number} </li>`
}

uoList += '</ul>'

document.querySelector('#target').innerHTML=uoList