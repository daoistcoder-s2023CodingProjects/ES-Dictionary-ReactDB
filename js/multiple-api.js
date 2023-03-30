// My Prototype Syntax - Waren Gador

// consist of key in 3 different api's given below

const Merriamkey = '98a198a3-a200-490a-ad48-98ac95b46d80';
const Pexelkey = 'P5QhWewHGb3ek9Mmq362jR0qT6BBSlPMLBg5iKE5RinKC3BblQGafGqA';
const OpenWeatherkey = '36b90ff89a52d49f85627b18ea50ed81';

// Throw a search function to get data from a user input

function SearchAWord(word,city){
    const MerriamUrl = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${Merriamkey}`;
    const PexelUrl = `https://api.pexels.com/v1/search?query=${word}&amp;per_page=1`;  
    const OpenWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&amp;appid=${OpenWeatherkey}&amp;units=metric`;

    // Fetching all response to these 3 api from given keys

    Promise.all([
        fetch(MerriamUrl),
        fetch(PexelUrl,{headers:{ Authorization: Pexelkey}}),
        fetch(OpenWeatherUrl)
    
    
    ]).then(responses => Promise.all(responses.map(response => response.json()))
    ).then(data => {
        const definition = data[0][0].shortdef[0];
      const imageUrl = data[1].photos[0].src.large;

      // display the definition and image in the HTML page, we can do this one later on
      document.getElementById('definition').textContent = definition;
      document.getElementById('image').setAttribute('src', imageUrl);
    })
    .catch(error => {
      console.log(error);
    });
    
}


// Documentation here 

/*

-> Merriam Webster = https://dictionaryapi.com/products/json

-> Pexel API = https://www.pexels.com/api/documentation/

-> Open Weather API = https://openweathermap.org/guide


Assign to Rome , Ryan and Bernard 

Reconstruct by. Waren Gador

 Message: I will may add some designs for these 3 api with fetching elements and classes to provide.

*/


