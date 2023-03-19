function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let speedyElement = document.querySelector("#wind");

  temperatureElement.innerHTML = Math.round(response.data.temperature.current, [
    0,
  ]);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  speedyElement.innerHTML = Math.round(response.data.wind.speed);
}
let apiKey = "a2f9330boa2f048eb011fa427tc514e3";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=London&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
