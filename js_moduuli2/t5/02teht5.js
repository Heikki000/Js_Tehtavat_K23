`Write a program that prompts the user for numbers. When the user enters one of the numbers he previously entered,
the program will announce that the number has already been given and stops its operation and then prints all the
given numbers to the console in ascending order. (2p)`

let numbers = []

for (;;) {
  number = prompt(`Give me a number and press ENTER:`)
  if (numbers.includes(number)) {
    alert("You've already entered that number!");
    break}
  numbers.push(number);
  }

numbers.sort((a, b) => a-b);

for (let i=0; i < numbers.length; i+=1){
  console.log(numbers[i]);
}
