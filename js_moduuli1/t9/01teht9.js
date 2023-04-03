const integer = prompt('Give me an integer and I will tell you if it is a prime number:');

let multiplication;
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 5; j++) {
           multiplication = i * j;
            console.log(i + ' times ' + j + ' is ' + multiplication + ".");
        }
    }


let total = 2;
if (integer == 1 || 2){
  document.querySelector('#target').innerHTML='The given number, ' + integer + ' is a prime number.';
}
else{
  while (total < integer){
    if (integer % total == 0){
      document.querySelector('#target').innerHTML='The given number, ' + integer + ' is not a prime number.';
      console.log(total)
      return (total);

    }
    else {
        total = total + 1;
        console.log(total)
  }
  }}
console.log(total)
if (total == integer) {
  document.querySelector('#target').innerHTML='The given number, ' + integer + ' is a prime number.';
    }





/*
        for n in range(1, luku):
            if luku % n == 0:
                total = total + 1

        if total <= 1:
            vastaus = {
                "Number": luku,
                "isPrime": True
            }
        else:
            vastaus = {
                "Number": luku,
                "isPrime": False
            }

document.querySelector('#target').innerHTML='The given number, ' + integer + 'is a prime number.';
document.querySelector('#target').innerHTML='The given number, ' + integer + 'is not a prime number.';*/