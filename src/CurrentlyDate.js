import React from "react";

export default function CurrentlyDate(props) {
  let months = [
    "Jan",
    "Fev",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let month = months[props.date.getMonth()];
  let date = props.date.getDate();
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  return (
    <div className="CurrentlyDate">
      <div className="row text-center mb-3">
        <div className="col">
          <h3>
            {month} {date}
          </h3>
        </div>
        <div className="col">
          <h3>{day}</h3>
        </div>
        <div className="col">
          <h3>
            {hours}:{minutes}
          </h3>
        </div>
      </div>
    </div>
  );
}
