import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./HourlyForecast.css";

export default function HourlyForecast(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}°`;
  }

  return (
    <div className="HourlyForecast col-2">
      <h3 className="Hours">{hours()}</h3>
      <WeatherIcon code={props.data.weather[0].icon} />
      <h3>{temperature()}</h3>
    </div>
  );
}
