const weatherContainerEl = document.querySelector(".weather--container");

const weatherInputEl = document.querySelector(".weather--search-box > input");

const weatherBtnEl = document.querySelector(".weather--search-box > button");

const weatherInfoEl = document.querySelector(".weather-info");

const weatherInfoImg = document.querySelector(".weather-info > img");

const weatherTemperatureEl = document.querySelector(".temperature");

const weatherDescriptionEl = document.querySelector(".description");

const weatherDetailsEl = document.querySelector(".weather-details");

const weatherHumidityEl = document.querySelector(".weather-details .humidity span");

const weatherWindEl = document.querySelector(".weather-details .wind span");

const weatherNotFoundEl = document.querySelector(".weather--not-found");

weatherBtnEl.addEventListener("click", () => {

    const searchTerm = weatherInputEl.value;

    if (!searchTerm) return;

    const API_KEY = "0d5e9d61127817867a1e496ac832ab7b";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${API_KEY}`)
    
    .then(response => response.json())
    
    .then(weather => {

        if (weather.cod == 404) {

            weatherContainerEl.style.height = "400px";

            weatherInfoEl.style.display = "none";
            
            weatherDetailsEl.style.display = "none";

            weatherNotFoundEl.style.display = "block";

            weatherNotFoundEl.classList.add("fade-in");

            return;

        }

        weatherNotFoundEl.style.display = "none";

        weatherNotFoundEl.classList.remove("fade-in");

        switch (weather.weather[0].main.toLowerCase()) {

            case "clouds":

                weatherInfoImg.src = "/images/cloud.png";

                break;

            case "clear":

                weatherInfoImg.src = "/images/clear.png";
                
                break;

            case "mist":

                weatherInfoImg.src = "/images/mist.png";
                
                break;

            case "rain":

                weatherInfoImg.src = "/images/rain.png";
                
                break;
                
            case "snow":

                weatherInfoImg.src = "/images/snow.png";
                
                break;
        
            default:

                weatherInfoImg.src = "";

                break;

        }

        weatherTemperatureEl.innerHTML = `${weather.main.temp} <span>°C</span>`;

        weatherDescriptionEl.innerHTML = weather.weather[0].description;

        weatherHumidityEl.innerHTML = weather.main.humidity + "%";

        weatherWindEl.innerHTML = `${weather.wind.speed}Km/h`;

        weatherContainerEl.style.height = "600px";

        weatherInfoEl.style.display = "block";
        
        weatherDetailsEl.style.display = "flex";

        weatherInfoEl.classList.add("fade-in");

        weatherDetailsEl.classList.add("fade-in");

    });

});
