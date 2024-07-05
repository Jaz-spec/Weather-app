let apiKey = "oa9f439cb230f940atf8b1fac2e41075";
let searchButton = document.querySelector(".search-button");
let currentCity = document.querySelector("#current-city");
let currentHumidity = document.querySelector("#current-humidity");
let currentWindSpeed = document.querySelector("#current-windspeed");
let currentCondition = document.querySelector("#current-condition");
let currentTemperature = document.querySelector(".current-temperature-value");
let icon = document.querySelector(".current-temperature-icon");

searchButton.addEventListener("click", getCity);
function getCity(event) {
  event.preventDefault();

  let inputCity = document.querySelector("#search-input");
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=$${inputCity.value}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showWeather);
  function showWeather(response) {
    console.log(response);
    let city = response.data.city;
    let temperature = response.data.temperature.current;
    let humidity = response.data.temperature.humidity;
    let windSpeed = response.data.wind.speed;
    let condition = response.data.condition.description;
    let iconUrl = response.data.condition.icon_url;
    console.log(iconUrl);

    currentCity.innerHTML = city;
    currentHumidity.innerHTML = `${humidity}%`;
    currentWindSpeed.innerHTML = `${windSpeed}km/h`;
    currentCondition.innerHTML = condition;
    currentTemperature.innerHTML = Math.round(temperature);
    icon.innerHTML = `<img src="${iconUrl}" class="icon" />`;
  }
}

let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes().toString().padStart(2, "0");
let day = now.getDay();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let date = `${days[day]} ${hours}:${minutes}`;
let currentDate = document.querySelector("#current-date");

currentDate.innerHTML = date;
