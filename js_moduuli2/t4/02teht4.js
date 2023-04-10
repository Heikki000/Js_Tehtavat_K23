alert(`Give me numbers and press ENTER (0 will break the operation): `)

let numbers = []
let number = 1
while (number != 0) {
  number = +prompt(`Give me a number:`)
  numbers.push(number);
}

numbers.sort((a, b) => a-b);

for (let i=numbers.length; i > 0; i-=1){
  console.log(numbers[i]);
}
