import React, { useState } from "react";
import GoogleFontLoader from "react-google-font-loader";
import axios from "axios";

import DayForecast from "./DayForecast";
import WeekForecast from "./WeekForecast";
import "./Overview.css";

export default function Overview() {
  const [weather, setWeather] = useState({ loaded: false });
  function handleResponse(response) {
    setWeather({
      loaded: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weather.loaded) {
    return (
      <div className="Overview">
        <GoogleFontLoader
          fonts={[
            {
              font: "Ubuntu",
              style: "normal",
              weights: [400],
              display: "swap",
            },
          ]}
          subsets={[
            "cyrillic-ext",
            "cyrillic",
            "greek-ext",
            "latin",
            "latin-ext",
            "greek",
          ]}
        />
        <div>
          <br />
          <h2 id="city-display" style={{ fontfamily: "Ubuntu, sans-serif" }}>
            {weather.city}
          </h2>
          <h3 id="date" style={{ fontfamily: "Ubuntu, sans-serif" }}>
            Saturday 12th September | 13:00
          </h3>
          <br />
        </div>
        <div className="row">
          <div className="col-6">
            <div className="temperature-wrapper">
              <span className="temperature" id="temperature">
                {Math.round(weather.temperature)}
              </span>
              <a
                href=" "
                id="celsius-link"
                className="active"
                style={{ fontfamily: "Ubuntu" }}
              >
                °C
              </a>{" "}
              |
              <a href=" " id="fahrenheit-link" style={{ fontfamily: "Ubuntu" }}>
                °F
              </a>
            </div>
            <br />
            <img
              src={weather.icon}
              alt={weather.description}
              className="main-icon"
              id="icon"
            />
          </div>
          <div className="col-6">
            <ul>
              <li className="tempDescription text-capitalize" id="description">
                {weather.description}
              </li>
              <li className="tempDescription">
                Wind: <span id="wind"> {weather.wind}</span> km/h
              </li>
              <li className="tempDescription">
                Humidity: <span id="humidity"> {weather.humidity}</span>%
              </li>
              <li className="tempDescription">
                <img
                  src={require("./images/sunrise_new.png")}
                  alt="sunrise symbol"
                  className="sunrise-icon"
                />
                <span className="sunrise-sunset" id="sunrise">
                  06:30
                </span>
              </li>
              <li className="temp-description">
                <img
                  src={require("./images/sunrise_new.png")}
                  alt="sunset symbol"
                  className="sunset-icon"
                />
                <span className="sunrise-sunset" id="sunset">
                  19.30
                </span>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <br />
        <div className="Forecast">
          <DayForecast />
        </div>
        <br />
        <WeekForecast />
      </div>
    );
  } else {
    let city = "London";
    const apiKey = "7078ca8e45a8e54ad9b485826d119586";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading weather...";
  }
}
