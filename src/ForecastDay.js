import React from "react";

export default function ForecastDay(props) {
  let iconUrlDay = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.data.condition.icon}.png`;

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return weekDays[day];
  }

  return (
    <div className="ForecastDay text-center">
      <h4>{day()}</h4>
      <img src={iconUrlDay} alt="clear"></img>
      <div>
        <span className="forecast-maximum">
          {Math.round(props.data.temperature.maximum)}° |
        </span>
        <span className="forecast-minimum">
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
