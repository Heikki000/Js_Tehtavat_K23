/*
Make an app that retrieves a random Chuck Norris joke and displays it in the console. (2p)
API to use: chucknorris.io
Send a request to https://api.chucknorris.io/jokes/random and print only the joke to the console (that would be the 'value' property)
No need to add a form.
 */
'use strict'

async function getData(){
  const response = await fetch ('https://api.chucknorris.io/jokes/random');
  const joke = await response.json();

  console.log(joke.value)
}

getData();

/*

try {

        const response = await fetch (`https://api.chucknorris.io/jokes/random`);
        const jsonData = await response.json();
        console.log(response.value);

        }

    catch (error){
  console.log(error.message);
    };

 */