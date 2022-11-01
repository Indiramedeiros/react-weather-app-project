import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="weather-app">
          <div className="row">
            <div className="col-4">
              <h3>10</h3>
            </div>
            <div className="col-4">
              <h3>10</h3>
            </div>
            <div className="col-4">
              <h3>10</h3>
            </div>
          </div>
          <h1>{weatherData.city}</h1>
          <div className="row">
            <div className="col-6">
              <img src={weatherData.iconUrl} alt={weatherData.icon}></img>
              <span className="current-temp">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="units">
                <a href="/">°C</a> ׀ <a href="/">°F</a>
              </span>
              <p className="description text-capitalize">
                {weatherData.description}
              </p>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {Math.round(weatherData.wind)} mph </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <form>
                <div className="form-row align-items-center">
                  <input
                    type="text"
                    className="form-control"
                    autoFocus="on"
                    placeholder="Enter City"
                  />
                </div>
              </form>
            </div>
            <button type="submit" className="btn btn-info mb-2 shadow">
              {" "}
              Search
            </button>
            <div className="col">
              <div>
                <button type="button" className="btn btn-secondary  shadow">
                  Current
                </button>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <img src="" alt="clear"></img>
              <h3>Sat</h3>
              <h3>20°C</h3>
            </div>
            <div className="col">
              <img src="" alt="clear"></img>
              <h3>Sun</h3>
              <h3>20°C</h3>
            </div>
            <div className="col">
              <img src="" alt="clear"></img>
              <h3>Mon</h3>
              <h3>20°C</h3>
            </div>
            <div className="col">
              <img src="" alt="clear"></img>
              <h3>Tue</h3>
              <h3>30°C</h3>
            </div>
            <div className="col">
              <img src="" alt="clear"></img>
              <h3>Wed</h3>
              <h3>20°C</h3>
            </div>
          </div>
        </div>

        <footer className="my-link ">
          <a
            href="https://github.com/Indiramedeiros/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            <strong> Open-source code </strong>
          </a>
          by Rafaela Medeiros{" "}
        </footer>
      </div>
    );
  } else {
    const apiKey = "e3f8a050e1oa90440293852ft7d8b76a";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
