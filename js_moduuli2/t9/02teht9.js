let numOriginal = [10, 13, 50, 99, 110, 222]
let numEven

function even() {
  numEven = []
  for (let i=0; i < numOriginal.length; i+=1) {
    if (numOriginal[i] % 2 == 0) {
      numEven.push(numOriginal[i]);
    }
  }
}

even();
console.log(numOriginal);
console.log(numEven);
