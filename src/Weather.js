import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,

      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      date: new Date(response.data.time * 1000),
    });
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    const apiKey = "e3f8a050e1oa90440293852ft7d8b76a";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="weather-app">
          <WeatherInfo data={weatherData} />

          <form onSubmit={handleSubmit}>
            <div className="row d-flex ">
              <div className="col-6">
                <div className="form-row align-items-center ">
                  <input
                    type="text"
                    className="form-control"
                    autoFocus="on"
                    placeholder="Enter City"
                    onChange={handleCityChange}
                  />
                </div>
              </div>
              <div className="col-3">
                <button type="submit" className="btn btn-info mb-2 shadow">
                  Search
                </button>
              </div>
              <div className="col-3 ">
                <div className="current-button">
                  <button type="button" className="btn btn-secondary  shadow">
                    Current
                  </button>
                </div>
              </div>
            </div>
          </form>

          <div className="row mt-5">
            <div className="col">
              <img src="" alt="clear"></img>
              <h3>Null</h3>
              <h3>Null</h3>
            </div>
            <div className="col">
              <img src="" alt="clear"></img>
              <h3>Null</h3>
              <h3>Null</h3>
            </div>
            <div className="col">
              <img src="" alt="clear"></img>
              <h3>Null</h3>
              <h3>Null</h3>
            </div>
            <div className="col">
              <img src="" alt="clear"></img>
              <h3>Null</h3>
              <h3>Null</h3>
            </div>
            <div className="col">
              <img src="" alt="clear"></img>
              <h3>Null</h3>
              <h3>Null</h3>
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
    search();
    return "Loading...";
  }
}
