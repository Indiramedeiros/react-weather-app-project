import React from "react";

export default function FormattedDate(props) {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dez",
  ];
  let month = months[props.date.getMonth()];
  let currentDay = props.date.getDate();

  return (
    <div>
      {month} {currentDay}
    </div>
  );
}
