import React from "react";
import FormatDate from "./FormatDate";
import FormatHours from "./FormatHours";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherData(props) {
  return (
    <div className="WeatherInfo">
      <h2 id="city-display" style={{ fontfamily: "Ubuntu, sans-serif" }}>
        {props.data.cityName}
      </h2>
      <h3 id="date" style={{ fontfamily: "Ubuntu, sans-serif" }}>
        <FormatDate date={props.data.date} />
      </h3>
      <br />
      <div className="row">
        <div className="col-6">
          <div className="temperature-wrapper">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>

          <div className="main-icon">
            <WeatherIcon code={props.data.icon} />
          </div>
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
              <span className="sunrise-sunset">
                {" "}
                <FormatHours date={props.data.sunrise} />
              </span>
            </li>
            <li className="temp-description">
              <img
                src={require("./images/sunrise_new.png")}
                alt="sunset symbol"
                className="sunset-icon"
              />
              <span className="sunrise-sunset">
                {" "}
                <FormatHours date={props.data.sunset} />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
