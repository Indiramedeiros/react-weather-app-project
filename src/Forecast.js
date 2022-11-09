import axios from "axios";
import React, { useState } from "react";
import ForecastDay from "./ForecastDay";

import "./forecast.css";

export default function Forecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setReady(true);
    setForecast(response.data.daily);
  }

  if (ready) {
    return (
      <div className="Forecast">
        <div className="row mt-5 mb-3">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key="index">
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "e3f8a050e1oa90440293852ft7d8b76a";
    let latitude = props.coordinates.latitude;
    let longitude = props.coordinates.longitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
