import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        °C |
        <a
          href=" "
          onClick={convertToFahrenheit}
          id="fahrenheit-link"
          style={{ fontfamily: "Ubuntu" }}
        >
          °F
        </a>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <a
          href=" "
          onClick={convertToCelsius}
          className="active"
          style={{ fontfamily: "Ubuntu" }}
        >
          °C
        </a>{" "}
        | °F
      </div>
    );
  }
}
