import React, { useState } from "react";
import axios from "axios";

import DailyForecast from "./DailyForecast";

import "./WeekForecast.css";

export default function WeekForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setWeekForecast] = useState(null);

  function handleForecastResponse(response) {
    setWeekForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeekForecast row">
        {forecast.list.slice(0, 6).map(function (forecastItem) {
          return <DailyForecast data={forecastItem} />;
        })}
      </div>
    );
  } else {
    const apiKey = "7078ca8e45a8e54ad9b485826d119586";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);
    return null;
  }
}
