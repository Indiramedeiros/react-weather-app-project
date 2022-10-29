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
              <p className="description">{weatherData.description}</p>
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
              <img src={weatherData.imgUrl} alt="clear"></img>
              <h3>Sat</h3>
              <h3>20°C</h3>
            </div>
            <div className="col">
              <img src={weatherData.imgUrl} alt="clear"></img>
              <h3>Sun</h3>
              <h3>20°C</h3>
            </div>
            <div className="col">
              <img src={weatherData.imgUrl} alt="clear"></img>
              <h3>Mon</h3>
              <h3>20°C</h3>
            </div>
            <div className="col">
              <img src={weatherData.imgUrl} alt="clear"></img>
              <h3>Tue</h3>
              <h3>20°C</h3>
            </div>
            <div className="col">
              <img src={weatherData.imgUrl} alt="clear"></img>
              <h3>Wed</h3>
              <h3>20°C</h3>
            </div>
          </div>
        </div>
      </div>
      <small className="my-link ">
        <a
          href="https://github.com/Indiramedeiros/weather-app-final"
          target="_blank"
          rel="noreferrer"
        >
          <strong> Open-source code </strong>
        </a>
        by Rafaela Medeiros{" "}
      </small>
    </div>
  );
}
