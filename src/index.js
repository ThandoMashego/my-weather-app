


function handleSearch(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#weather-app-city");
    cityElement.innerHTML= searchInput.value;
}

let searchFormElement= document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch)