let n = +prompt(`Tell me how many participants you want:`)
let nArray = []

for (let i = 1; i<= n; i++) {
  nArray.push(prompt('Tell me the ' + i + '. participant:'))
}

nArray.sort();

let listPrint = `<ol>`

for (let i = 0; i < nArray.length; i++) {
  listPrint += `<li> ${nArray[i]} </li>`
}

listPrint += `</ol>`

document.querySelector('#target').innerHTML += listPrint


