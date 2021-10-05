// <!-- -----------------------------------app-section-------------------------------------- -->

const url = "http://api.openweathermap.org/data/2.5/"
const key = "c848ad4eafe0442e2c0c226153263c24"

const setQuery = (e) => {
   if (e.keyCode == "13")
   getResult(searchBar.value);
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=en`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}
const displayResult = (result) => {
    let city = document.querySelector(".city")
    city.innerText = `${result.name}, ${result.sys.country}`

    let temp = document.querySelector(".temp")
    temp.innerHTML = `${Math.round(result.main.temp)}°C`

    let desc = document.querySelector(".desc")
    desc.innerText = result.weather [0].description

    let minmax = document.querySelector(".minmax")
    minmax.innerText = `${Math.round(result.main.temp_min)}°c / ${Math.round(result.main.temp_max)}°c`
}

const searchBar = document.querySelector("#searchBar")
searchBar.addEventListener("keydown", setQuery);



