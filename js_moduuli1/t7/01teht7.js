const dicesNum = prompt('How many dices do you want to roll?');

let numSum = 0, rolls = 0;

while (rolls < dicesNum) {
  const num = Math.floor(Math.random()*6)+1;
  numSum = numSum + num;
  rolls++;
  console.log(num, numSum, rolls);
}

document.querySelector('#target').innerHTML='The sum of the results is ' + numSum + '.'
