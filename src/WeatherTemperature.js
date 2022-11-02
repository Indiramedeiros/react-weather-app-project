import React, { useState } from "react";

export default function WeatherTemperature(props) {
  return (
    <span className="WeatherTemperature">
      <span className="current-temp">{Math.round(props.celsius)} </span>
      <span className="units">°Cǀ°F</span>
    </span>
  );
}
