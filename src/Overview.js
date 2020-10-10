import React, { useState } from "react";
import axios from "axios";

import DayForecast from "./DayForecast";
import WeekForecast from "./WeekForecast";
import WeatherData from "./WeatherData";
import "./Overview.css";

export default function Overview(props) {
  const [city, setCity] = useState(props.city);
  const [weather, setWeather] = useState({ loaded: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeather({
      loaded: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    const apiKey = "7078ca8e45a8e54ad9b485826d119586";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCitySearch(event) {
    setCity(event.target.value);
  }

  if (weather.loaded) {
    return (
      <div className="Overview">
        <div className="row">
          <div className="col-6">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter a city"
                  className="form-control"
                  autoFocus="on"
                  autoComplete="off"
                  id="search-text-input"
                  onChange={handleCitySearch}
                />
              </div>
              <button type="button" value="Search" className="btn btn-primary">
                Search
              </button>
            </form>
          </div>
          <div className="col-6">
            <button
              type="button"
              className="btn btn-success"
              id="location-button"
            >
              Current Location
            </button>
          </div>
        </div>
        <br />
        <WeatherData data={weather} />
        <br />
        <div className="Forecast">
          <DayForecast />
        </div>
        <br />
        <WeekForecast />
      </div>
    );
  } else {
    search();
    return "Loading weather...";
  }
}
