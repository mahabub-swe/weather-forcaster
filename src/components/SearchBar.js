import React from "react";
import axios from "axios";

export default function SearchBar({ setWeather, apiKey, setSearch }) {
  const [location, setLocation] = React.useState("");
  function submitHandler(event) {
    event.preventDefault();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}
`
      )
      .then((res) => {
        setWeather({
          city: res.data.name,
          temp: Math.round(res.data.main.temp),
          clouds: res.data.clouds.all,
          humidity: res.data.main.humidity,
          feels_like: Math.round(res.data.main.feels_like),
          wind: res.data.wind.speed,
          condition: res.data.weather[0].main,
        });
        setSearch(true);
      });
  }
  function changeHandler(event) {
    setLocation(event.target.value);
  }
  return (
    <form onSubmit={submitHandler}>
      <input type="text" onChange={changeHandler} />
      <button>Search</button>
    </form>
  );
}
