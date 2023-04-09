let numbers = [];

for(let i=0;i<=4;i+=1){
  numbers[i] = +prompt('Give me the ' + (i+1) + '. number: ');
}

console.log(`The numbers in the reverse order are:`)

for (let i=4; i>=0; i-=1){
  console.log(numbers[i]);
}

