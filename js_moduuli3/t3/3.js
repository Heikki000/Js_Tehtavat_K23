'use strict';
const names = ['John', 'Paul', 'Jones'];

const targetElement = document.getElementById('target')

for (let i= 0; i < names.length; i++) {
  targetElement.innerHTML += `<li>${names[i]}</li>`
  console.log(i)
}
