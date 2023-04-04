const integer = prompt('Give me an integer and I will tell you if it is a prime number:');
let total = 0;

for (let i = 1; i < integer; i++) {
  if (integer % i == 0) {
    total = total + 1;
           }
        }

if (total < 2){
  document.querySelector('#target').innerHTML='The given number, ' + integer + ' is a prime number.';
}
else {
  document.querySelector('#target').innerHTML='The given number, ' + integer + ' is not a prime number.';
}
