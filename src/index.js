// seperation of concerns(when we have 2 diffent function that each do something different)

function updateWeather(response){
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#weather-app-city");
    // why does it matter that the temperatureElement must be at the end
    cityElement.innerHTML= response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city){
    let apiKey = "5ff4aa43fo0e6c0bf35114ad9e37fctc"
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`
    axios.get(apiUrl).then(updateWeather)
}

function handleSearch(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    
    searchCity(searchInput.value);
}

let searchFormElement= document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch)

searchCity("Cape Town");