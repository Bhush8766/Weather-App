const btnElement = document.querySelector("#getWeatherBTN");
const inputElement = document.querySelector("#cityInput");
const resultElement = document.querySelector("#showWeather");

function renderData(dataweather) {
    resultElement.innerHTML = ` 
        <h3>${dataweather.name} 
        <span class="text-secondary">${dataweather.sys.country}</span></h3>
        <p>Temp : ${dataweather.main.temp} °C</p>
        <p>${dataweather.weather[0].main} : ${dataweather.weather[0].description}</p>
    `;
}

async function fetchAPI(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ca018df54353f065aaed7d802825b8be`
        );

        const data = await response.json();
        console.log(data);

        renderData(data);
    } catch (err) {
        console.log(err);
    }
}

function showWeather() {
    const city = inputElement.value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    fetchAPI(city);
    inputElement.value = '';
}

btnElement.addEventListener("click", showWeather);