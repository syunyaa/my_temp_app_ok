function showLocation(location) {
  let currentCity = document.querySelector("h1");
  console.log(location);
  let city2 = location.data.name;
  currentCity.innerHTML = city2;
  let humidity = document.querySelector("#humid");
  let changeHumidity = location.data.main.humidity;
  humidity.innerHTML = `Humidity: ${changeHumidity}%`;
  let wind = document.querySelector("#windy");
  let changeWind = location.data.wind.speed;
  wind.innerHTML = `Wind: ${changeWind}km/h`;
  let status = document.querySelector("#weatherStatus");
  let description = location.data.weather[0].description;
  status.innerHTML = description.charAt(0).toUpperCase() + description.slice(1);

  let tempCurrent = document.querySelector("#tempNow");
  let changeTempCurrent = location.data.main.temp;
  tempCurrent.innerHTML = Math.round(changeTempCurrent);
}

function handleCoords(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "metric";
  let apiKey = "97bed167ec49bff56e6c1b63daef9c86";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showLocation);

  //alert("ok");
}

function onClick() {
  navigator.geolocation.getCurrentPosition(handleCoords);
}

let currentButton = document.querySelector("#clickCurrent");
currentButton.addEventListener("click", onClick);

function searchCity(event) {
  event.preventDefault();
  let units = "metric";
  let apiKey = "97bed167ec49bff56e6c1b63daef9c86";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showLocation);
}

let searchButton = document.querySelector("#clickSearch");
searchButton.addEventListener("click", searchCity);
