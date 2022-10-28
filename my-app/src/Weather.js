import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "London",
    temperature: "14",
    date: "Oct 13",
    weekDay: "Thursday",
    hour: "20:10",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: "84",
    wind: "3",
  };

  return (
    <div className="Weather">
      <div className="container">
        <div className="weather-app">
          <div className="row">
            <div className="col-4">
              <h3>{weatherData.date}</h3>
            </div>
            <div className="col-4">
              <h3>{weatherData.weekDay}</h3>
            </div>
            <div className="col-4">
              <h3>{weatherData.hour}</h3>
            </div>
          </div>
          <h1>{weatherData.city}</h1>
          <div className="row">
            <div className="col-6">
              <img src={weatherData.imgUrl} alt="clear"></img>
              <span className="current-temp">{weatherData.temperature}</span>
              <span className="units">
                <a href="/">°C</a> ׀ <a href="/">°F</a>
              </span>
              <p class="description">{weatherData.description}</p>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind}mph </li>
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
                    autofocus="on"
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
        </div>
      </div>
    </div>
  );
}
