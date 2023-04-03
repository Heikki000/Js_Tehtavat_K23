const year = prompt('Enter a year and the page will tell you whether it is a leap year or not:');
console.log(year);

if (year % 4 == 0 && year % 400 == 0) {
  document.querySelector('#target').innerHTML = 'The entered year: ' + year + ' is a leap year.';
}
else if(year % 4 == 0 && year % 100 != 0){
    document.querySelector('#target').innerHTML = 'The entered year: ' + year + ' is a leap year.';
  }
else {
  document.querySelector('#target').innerHTML = 'The entered year: ' + year + ' is not a leap year.';
}