import React from "react";
import Logo from "./logo_300x289.png";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="title">
        <h1>Weather Forcaster</h1>
      </div>
    </div>
  );
}
