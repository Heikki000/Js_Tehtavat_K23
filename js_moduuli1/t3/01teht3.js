
'use strict';
const num1 = prompt('Give an integer.');
const num2 = prompt('Give an integer.');
const num3 = prompt('Give an integer.');
const summa = +num1 + +num2 + +num3;
const tulo = +num1 * +num2 * +num3;
const keskiarvo = summa/3;
//console.log(summa)
document.querySelector('#target1').innerHTML = 'The sum is ' + summa +'.';
document.querySelector('#target2').innerHTML = 'The product is ' + tulo +'.';
document.querySelector('#target3').innerHTML = 'The average is ' + keskiarvo +'.';
//document.write('Lukujen summa on ' + summa +'.');
document.write(summa);

//
//const num2 = +num2;
//const num3 = +num3;

//document.querySelector('#target').innerHTML = 'Hello, ' + num1 + '!';