import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecast(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let dayOfTheWeek = days[date.getDay()];

    return `${dayOfTheWeek}`;
  }
  function temperature() {
    const temperature = Math.round(props.data.main.temp);
    return `${temperature}°`;
  }

  return (
    <div className="DayForecast col-2">
      <h3 className="Day">{day()}</h3>
      <WeatherIcon code={props.data.weather[0].icon} />
      <h3>{temperature()}</h3>
    </div>
  );
}
