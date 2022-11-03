import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="current-temp">{Math.round(props.celsius)} </span>
        <span className="units">
          °C ǀ
          <a href="/" rel="noreferrer" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span className="WeatherTemperature">
        <span className="current-temp">{Math.round(fahrenheit)} </span>
        <span className="units">
          <a href="/" rel="noreferrer" onClick={showCelsius}>
            °C
          </a>
          ǀ °F
        </span>
      </span>
    );
  }
}
