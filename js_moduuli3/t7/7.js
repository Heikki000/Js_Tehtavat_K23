'use strict'

// etsitään html-sivulta img- ja p-tagit
const imgElem = document.getElementById('target')
const pElem = document.querySelector('#trigger')

//asetetaan pElementille tapahtumakuuntelijat.
//a) kuunnellaan että tuleeko hiiri tekstin päälle
pElem.addEventListener('mouseenter', function() {
  imgElem.src="img/picB.jpg"
})
pElem.addEventListener('mouseleave', function() {
  imgElem.src="img/picA.jpg"
})