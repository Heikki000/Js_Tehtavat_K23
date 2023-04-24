
document.querySelector('form').addEventListener('submit', async function(evt) {
  evt.preventDefault();
  const query = document.querySelector('#query').value;
  console.log(query)
  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const jsonData = await response.json();
    console.log('Response:', response);
    console.log('JSON Data:', jsonData);
  } catch (error) {
    console.log('Error:', error);
  }
});