const apiKey = 'YOUR_API_KEY';
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const currentWeather = document.querySelector('#current-weather');
const forecastContainer = document.querySelector('#forecast-container');
const searchHistoryContainer = document.querySelector('#search-history');

const fetchCoordinates = async (city) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
  const data = await response.json();
  return { lat: data.coord.lat, lon: data.coord.lon };
};

const fetchWeather = async (lat, lon) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`);
  const data = await response.json();
  return data;
};

const displayCurrentWeather = (data) => {
  const city = data.city.name;
  const date = new Date(data.list[0].dt * 1000).toLocaleDateString();
  const temp = data.list[0].main.temp;
  const wind = data.list[0].wind.speed;
  const humidity = data.list[0].main.humidity;
  const icon = data.list[0].weather[0].icon;
  
  currentWeather.innerHTML = `
    <h2>${city} (${date}) <img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather icon"></h2>
    <p>Temp: ${temp} °F</p>
    <p>Wind: ${wind} MPH</p>
    <p>Humidity: ${humidity} %</p>
  `;
};

const displayForecast = (data) => {
  forecastContainer.innerHTML = '';
  for (let i = 1; i < data.list.length; i += 8) {
    const date = new Date(data.list[i].dt * 1000).toLocaleDateString();
    const temp = data.list[i].main.temp;
    const wind = data.list[i].wind.speed;
    const humidity = data.list[i].main.humidity;
    const icon = data.list[i].weather[0].icon;
    
    const forecastEl = document.createElement('div');
    forecastEl.classList.add('forecast-day');
    forecastEl.innerHTML = `
      <h3>${date}</h3>
      <img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather icon">
      <p>Temp: ${temp} °F</p>
      <p>Wind: ${wind} MPH</p>
      <p>Humidity: ${humidity} %</p>
    `;
    forecastContainer.appendChild(forecastEl);
  }
};

const saveSearchHistory = (city) => {
  let history = JSON.parse(localStorage.getItem('searchHistory')) || [];
  if (!history.includes(city)) {
    history.push(city);
    localStorage.setItem('searchHistory', JSON.stringify(history));
  }
};

const loadSearchHistory = () => {
  const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
  searchHistoryContainer.innerHTML = '';
  history.forEach(city => {
    const button = document.createElement('button');
    button.textContent = city;
    button.addEventListener('click', () => handleCitySearch(city));
    searchHistoryContainer.appendChild(button);
  });
};

const handleCitySearch = async (city) => {
  const { lat, lon } = await fetchCoordinates(city);
  const weatherData = await fetchWeather(lat, lon);
  displayCurrentWeather(weatherData);
  displayForecast(weatherData);
  saveSearchHistory(city);
  loadSearchHistory();
};

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const city = searchInput.value.trim();
  if (city) {
    handleCitySearch(city);
  }
});

loadSearchHistory();
