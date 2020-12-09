import React from "react";
import moment from "moment";

export default function Weather({ weather }) {
  return (
    <div className="weather">
      <div>
        <h2>{weather.city}</h2>
        <h2>{moment().format("dddd h:mm a")}</h2>
        <h2>{weather.condition}</h2>
      </div>
      <div className="tempareture">
        <img src="http://openweathermap.org/img/wn/50n@2x.png" alt="icon" />
        <h1>{weather.temp}</h1>
        <div className="unit">
          <span>o</span>
          <span>C</span>
        </div>
      </div>
      <div className="additionalInfo">
        <h3>
          Feels like {weather.feels_like} <sup>o</sup>C{" "}
        </h3>
        <div>
          <h3>Cloudiness: {weather.clouds}%</h3>
          <h3>Humudity : {weather.humidity}%</h3>
          <h3>Wind : {weather.wind} m/s</h3>
        </div>
      </div>
    </div>
  );
}
