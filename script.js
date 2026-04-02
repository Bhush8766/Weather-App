// const btnElement = document.querySelector("#getWeatherBTN");
// const inputElement = document.querySelector("#cityInput");
// const resultElement = document.querySelector("#showWeather");

// function renderData(dataweather) {
//     resultElement.innerHTML = ` 
//         <h3>${dataweather.name} 
//         <span class="text-secondary">${dataweather.sys.country}</span></h3>
//         <p>Temp : ${dataweather.main.temp} °C</p>
//         <p>${dataweather.weather[0].main} : ${dataweather.weather[0].description}</p>
//     `;
// }

// async function fetchAPI(city) {
//     try {
//         const response = await fetch(
//             `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ca018df54353f065aaed7d802825b8be`
//         );

//         const data = await response.json();
//         console.log(data);

//         renderData(data);
//     } catch (err) {
//         console.log(err);
//     }
// }

// function showWeather() {
//     const city = inputElement.value;

//     if (city === "") {
//         alert("Please enter a city name");
//         return;
//     }

//     fetchAPI(city);
//     inputElement.value = '';
// }

// btnElement.addEventListener("click", showWeather);











function goToSearch(){
    screen1.classList.add("hidden");
    screen2.classList.remove("hidden");
}

function goBack(){
    screen3.classList.add("hidden");
    screen2.classList.remove("hidden");
}


function goHome(){
    screen2.classList.add("hidden");
    screen1.classList.remove("hidden");
}


async function getWeather(){

    const city = document.getElementById("city").value;

    if(city===""){
        alert("Enter city");
        return;
    }

    const apiKey = "https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ca018df54353f065aaed7d802825b8be";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ca018df54353f065aaed7d802825b8be`;

    try{
        const res = await fetch(url);
        const data = await res.json();

        if(data.cod !== 200){
            alert("City not found");
            return;
        }

        cityName.innerText = data.name;
        temp.innerText = Math.round(data.main.temp)+"°";
        desc.innerText = data.weather[0].main;

        maxTemp.innerText = Math.round(data.main.temp_max);
        minTemp.innerText = Math.round(data.main.temp_min);

        humidity.innerText = data.main.humidity+"%";
        wind.innerText = data.wind.speed+" km/h";

        // ICON LOGIC
        const condition = data.weather[0].main.toLowerCase();
        let icon="";

        if(condition.includes("cloud")){
            icon='<i class="fa-solid fa-cloud"></i>';
        }
        else if(condition.includes("rain")){
            icon='<i class="fa-solid fa-cloud-rain"></i>';
        }
        else if(condition.includes("clear")){
            icon='<i class="fa-solid fa-sun"></i>';
        }
        else if(condition.includes("snow")){
            icon='<i class="fa-solid fa-snowflake"></i>';
        }
        else{
            icon='<i class="fa-solid fa-cloud-sun"></i>';
        }

        weatherIcon.innerHTML = icon;

        screen2.classList.add("hidden");
        screen3.classList.remove("hidden");

    }catch{
        alert("Error");
    }
}
