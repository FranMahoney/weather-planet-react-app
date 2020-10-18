import React from "react";

import DailyForecast from "./DailyForecast";

import "./WeekForecast.css";

export default function WeekForecast(props) {
  return (
    <div className="WeekForecast row">
      {props.forecast.list.map(function (forecastItem, index) {
        if (
          index === 1 ||
          index === 9 ||
          index === 17 ||
          index === 25 ||
          index === 33 ||
          index === 39
        ) {
          return (
            <DailyForecast key={index} data={forecastItem} index={index} />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
