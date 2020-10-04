import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GoogleFontLoader from "react-google-font-loader";

import DayForecast from "./DayForecast";
import WeekForecast from "./WeekForecast";
import "./Overview.css";

export default function Overview() {
  return (
    <div className="Overview">
      <GoogleFontLoader
        fonts={[
          {
            font: "Ubuntu",
            weights: [400],
          },
        ]}
        subsets={["cyrillic-ext", "greek"]}
      />
      <div>
        <br />
        <h2 id="city-display" style={{ fontfamily: "Ubuntu" }}>
          London
        </h2>
        <h3 id="date" style={{ fontfamily: "Ubuntu" }}>
          Saturday 12th September | 13:00
        </h3>
        <br />
      </div>
      <div className="row">
        <div className="col-6">
          <div className="temperature-wrapper">
            <span className="temperature" id="temperature">
              21
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
            src={require("./images/suncloud.png")}
            alt="sun and cloud weathr symbol"
            className="main-icon"
            id="icon"
          />
        </div>
        <div className="col-6">
          <ul>
            <li className="temp-description" id="description">
              Sun and cloud
            </li>
            <li className="temp-description">
              Wind: <span id="wind"></span> km/h
            </li>
            <li className="temp-description">
              Humidity: <span id="humidity"></span>%
            </li>
            <li className="temp-description">
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
}
