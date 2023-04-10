let arrayExample = ['Word1', 'Word2', 'Word3', 'Word4']
function concat(array) {
  let htmlPrint = '';
  for (let i of array){
    htmlPrint =  htmlPrint.concat(i);
  }
  document.write(htmlPrint)
}
concat(arrayExample)