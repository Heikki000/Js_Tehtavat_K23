'use strict';

// nettiin lähetettävän hakulauseen alkuosa (vakio)
const hakuAlku = "https://api.tvmaze.com/search/shows?q="

// etsitään html-sivulta div-elementti
const tulosAlue = document.querySelector('#results')

// etsitään html-sivun form-elementti
const tvForm = document.querySelector('#tv');

// asetetaan lomakkeelle tapahtumankuuntelija
tvForm.addEventListener('submit', async function (evt) {
  // estetään lomakkeen oletustoiminta (action)
  evt.preventDefault();
  // etsitään lomakkeelta käyttäjän antama syöte
  const hakuArvo = document.querySelector('input[name=q]').value;
  // muodostetaan lopullinen nettiin lähetettävä hakukysely
  const hakuLause = hakuAlku + hakuArvo
  console.log("-- Hakulause: " + hakuLause)

  // Tehdään ajax-tyyppinen datan haku, hyödynnetään Fetch APIa.
  // Käytetään asynkronisia funktioita ja promise-tekniikkaa.
  try {
    // error handling: try/catch/finally
    const response = await fetch(
      hakuLause
    ); // starting data download, fetch returns a promise which contains an object of type 'response'
    const jsonData = await response.json(); // retrieving the data retrieved from the response object using the json() function

    // Kutsutaan funktiota, joka hoitaa tietojen esittämisen web-sivulle.
    // Funktion kutsu on nyt aivan tavallinen funktion kutsu,
    // edellisen komennon 'await' varmistaa että alla oleva kutsu suoritetaan
    // vasta kun 'jsonData' on varmasti saatavissa.
    kasitteleData(jsonData)

  } catch (error) {
    console.log(error.message);
  }
});
function kasitteleData(jsonData) {
    // tyhjennetään aluksi tulosalue
    tulosAlue.innerHTML = ''

    // haetaan tv-sarjasta tietoja ja lisätään ne html-sivulle
    for (let tvSarja of jsonData) {

      let h2Elem = document.createElement('h2')
      h2Elem.innerText = tvSarja.show.name

      //linkki
      let linkElem = document.createElement('a')
      linkElem.href = tvSarja.show.url
      linkElem.target = '_blank'
      linkElem.innerHTML = tvSarja.show.url

      //lisätään kuva
      let imgElem = document.createElement('img')
      //varaudutaan medium kuvan puuttumiseen ?-operaattorilla
      // jos image.medium löytyy, niin otetaan sen arvo
      // jos medium kuvaa ei löydy, niin arvoksi tulee 'undefined'.

/*        if-lauseen avulla tehtävä
      if (tvSarja.show.image?.medium) {
        imgElem.src = tvSarja.show.image.medium}
      else {
        imgElem.src = 'https://via.placeholder.com/210x295?text=Not%20Found'
      }
      */
      imgElem.src = tvSarja.show.image?.medium ? tvSarja.show.image.medium : 'https://via.placeholder.com/210x295?text=Not%20Found';
      imgElem.alt = tvSarja.show.name

      let divElem = document.createElement('div')
      divElem.innerHTML = tvSarja.show.summary

      // luodaan article-elementti, jonka sisään sarjan tiedot tulevat
      let articleElem = document.createElement('article')
      articleElem.appendChild(h2Elem)
      articleElem.appendChild(linkElem)
      articleElem.appendChild(imgElem)
      articleElem.appendChild(divElem)

      // lisätään luotu article html-sivulle
      tulosAlue.append(articleElem)
    }

  }
