import React from "react";
import CurrentlyDate from "./CurrentlyDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <CurrentlyDate date={props.data.date} />

      <h1>{props.data.city}</h1>
      <div className="row">
        <div className="col-6">
          <img src={props.data.iconUrl} alt={props.data.description}></img>
          <span className="current-temp">
            {Math.round(props.data.temperature)}
          </span>
          <span className="units">
            <a href="/">°C</a> ׀ <a href="/">°F</a>
          </span>
          <p className="description text-capitalize">
            {props.data.description}
          </p>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} mph </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
