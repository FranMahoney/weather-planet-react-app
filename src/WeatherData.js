import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherData(props) {
  return (
    <div className="WeatherInfo">
      <h2 id="city-display" style={{ fontfamily: "Ubuntu, sans-serif" }}>
        {props.data.city}
      </h2>
      <h3 id="date" style={{ fontfamily: "Ubuntu, sans-serif" }}>
        <FormatDate date={props.data.date} />
      </h3>
      <br />
      <div className="row">
        <div className="col-6">
          <div className="temperature-wrapper">
            <span className="temperature" id="temperature">
              {Math.round(props.data.temperature)}
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
            src={props.data.icon}
            alt={props.data.description}
            className="main-icon"
            id="icon"
          />
        </div>
        <div className="col-6">
          <ul>
            <li className="tempDescription text-capitalize" id="description">
              {props.data.description}
            </li>
            <li className="tempDescription">
              Wind: <span id="wind"> {props.data.wind}</span> km/h
            </li>
            <li className="tempDescription">
              Humidity: <span id="humidity"> {props.data.humidity}</span>%
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
    </div>
  );
}
