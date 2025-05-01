document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("cityInput");
  const getWeatherButton = document.getElementById("getWeather");
  const weatherInfo = document.getElementById("weatherInfo");
  const cityName = document.getElementById("cityName");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");
  const errorMsg = document.getElementById("errorMsg");

  const API_KEY = "fd5d3fabf6a1611a16ab6941c3dd839b";

  getWeatherButton.addEventListener("click", async (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    if (!city) {
      displayError();
      return;
    }

    try {
      const wheatherData = await fetchWeather(city);
      console.log(wheatherData);

      displayWeather(wheatherData);
    } catch (error) {
      displayError();
    }
  });

  async function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    return data;
  }

  function displayWeather(data) {
    weatherInfo.classList.remove("hidden");
    weatherInfo.classList.add("info");
    errorMsg.classList.add("hidden");

    const { name, main, weather } = data;
    cityName.textContent = name;
    temperature.textContent = `Tempreature : ${main.temp}f`;
    description.textContent = `weather : ${weather[0].description}`;
  }

  function displayError() {
    weatherInfo.classList.add("hidden");
    errorMsg.classList.remove("hidden");
    errorMsg.classList.add("error");
  }
});
