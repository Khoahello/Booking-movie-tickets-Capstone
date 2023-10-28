import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div id="PageNotFound">
      <div className="flex-container">
        <div className="text-center">
          <h1>
            <span className="fade-in" id="digit1">
              4
            </span>
            <span className="fade-in" id="digit2">
              0
            </span>
            <span className="fade-in" id="digit3">
              4
            </span>
          </h1>
          <h3 className="fadeIn">PAGE NOT FOUND</h3>
          <NavLink to="/home">
            <button type="button" name="button">
              Return To Home
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
