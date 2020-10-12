import React, { useState } from "react";
import axios from "axios";
import HourlyForecast from "./HourlyForecast";

import "./DayForecast.css";

export default function DayForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    console.log(response.data);
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="DayForecast row">
        {forecast.list.slice(0, 6).map(function (forecastItem) {
          return <HourlyForecast data={forecastItem} />;
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

// <HourlyForecast data={forecast.list[1]} />
