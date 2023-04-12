'use strict'

const targetElement = document.getElementById('target')

//
//const kaikkiLiElementit = document.querySelectorAll('li')


const ekaLi = document.createElement('li')
const tokaLi = document.createElement('li')
const kolmasLi = document.createElement('li')

const ekaTeksti = document.createTextNode('First item')
const tokaTeksti = document.createTextNode('Second item')
const kolmasTeksti = document.createTextNode('Third item')

ekaLi.appendChild(ekaTeksti)
tokaLi.appendChild(tokaTeksti)
kolmasLi.appendChild(kolmasTeksti)

targetElement.appendChild(ekaLi)
targetElement.appendChild(tokaLi)
targetElement.appendChild(kolmasLi)

const kaikkiLiElementit = document.getElementsByTagName('li');
const tokaLiE = kaikkiLiElementit[1]

tokaLiE.classList.add('my-item')