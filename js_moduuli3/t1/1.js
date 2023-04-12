'use strict'

const targetElement = document.getElementById('target')

if (targetElement != null) {
  console.log("Elementti löytyi")
} else {
  console.log("Ei löytynyt")
}

targetElement.innerHTML=`
<li>First item</li>
<li>Second item</li>
<li>Third item</li>`

targetElement.classList.add('my-list');

//const addList = ['First item', 'Second item', 'Third item']