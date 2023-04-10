alert(`Give me 6 dogs' names: `)

let dogs = []

for (i = 0; i < 6; i++) {
  dogs.push(prompt(`${i+1}. dog:`));
}

dogs.sort();
dogs.reverse();

let uoList = `<ul>`

for (let i = 0; i < dogs.length; i++) {
  uoList += `<li> ${dogs[i]} </li>`
}

uoList += `</ul>`

document.querySelector('#target').innerHTML += uoList

