const key = "0ec216b6d89c035a06fcc1d4b62fbab1";

function printData(data) {
  console.log(data);
  document.querySelector(".city").innerHTML = "Weather in " + data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".text__weather").innerHTML =
    data.weather[0].description;
  document.querySelector(".humidity").innerHTML =
    "Humidity: " + data.main.humidity + "%";
  document.querySelector(
    ".img__cast"
  ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  ("");
}

async function getCityData(city) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
  ).then((response) => response.json());

  printData(data);
}

function buttonClick() {
  const city = document.querySelector(".input__city").value;

  getCityData(city);
}
