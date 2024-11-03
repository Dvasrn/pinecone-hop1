const searchInput = "Ulaanbaatar";

const appId = "58b6f7c78582bffab3936dac99c31b25";

async function findCity() {
  const searchInput = document.getElementById("searchInput").value;
  console.log(searchInput);
  const getCity = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchInput}.json?access_token=pk.eyJ1IjoidHVydXV1dSIsImEiOiJjbDBhZW15ZHAwMGhjM2RtZjB6dnltZnhjIn0.HSb4dmJFSM2USxDkTsScDg`
  );
  const city = await getCity.json();

  for (let i = 0; i < city.features.length; i++) {
    const cities = document.getElementById("cities");
    const citiesName = document.createElement("button");
    citiesName.innerHTML = city.features[i].place_name;
    cities.appendChild(citiesName);

    citiesName.addEventListener("click", () => {
      findWeather(city.features[i].center, city.features[i].place_name);
    });
  }
}

const findWeather = (center, place_name) => {
  weatherInfoByCity(center[1], center[0], place_name);
};

async function weatherInfoByCity(lat, lng, place_name) {
  const getWeather = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lng}&cnt=1&appid=${appId}&units=metric`
  );

  const weather = await getWeather.json();
  console.log(weather.list[0]);

  const temperatureDay = document.createElement("p");
  const temperatureNight = document.createElement("p");
  temperatureNight.innerHTML = weather.list[0].temp.night;
  temperatureDay.innerHTML = weather.list[0].temp.day;
  const weatherByCity = document.getElementById("weather");
  weatherByCity.append(temperatureDay, temperatureNight);
}
