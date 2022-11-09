import React from "react";

export default function FormattedHour(props) {
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();

  return (
    <div>
      {hours}: {minutes}
    </div>
  );
}
