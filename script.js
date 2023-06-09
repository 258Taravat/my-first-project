let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
date.innerHTML = `${day} ${hours}:${minutes}`;

function showTempCity(response) {
  let temp = Math.round(response.data.main.temp);
  let temperaturecity = document.querySelector("#temperature");
  temperaturecity.innerHTML = temp;
  let humidity = Math.round(response.data.main.humidity);
  let humidCity = document.querySelector("#humidity");
  humidCity.innerHTML = humidity;
  let wind = Math.round(response.data.wind.speed);
  let windCity = document.querySelector("#wind");
  windCity.innerHTML = wind;
}

function showCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let h1 = document.querySelector("city");
  city.innerHTML = `${cityInput.value}`;
  let apiKey = "535cacbb3f8a0df0aeb4790235b9541f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=metric&appid=535cacbb3f8a0df0aeb4790235b9541f`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTempCity);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", showCity);
