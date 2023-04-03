const answer = confirm('Should I calculate the square root?');
if (answer == true){
  const num = prompt('Please, give me a number:')
  if (num >= 0){
    document.querySelector('#target').innerHTML =('The square root is ' + Math.sqrt(num) + '.');
  }
  else if (num < 0){
    document.querySelector('#target').innerHTML =('The square root of a negative number is not defined')
  }
  else{
    document.querySelector('#target').innerHTML=('You did not enter a valid number.')
  }
}
else {
  document.querySelector('#target').innerHTML =('The square root is not calculated.');
}