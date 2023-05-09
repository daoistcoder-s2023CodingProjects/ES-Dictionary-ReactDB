import React from "react";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="top">
        <span className="icons">
          <i className="fa-solid fa-book-open"></i>
        </span>
        <span className="title">ES Dictionary</span>
      </div>
      <div className="user-tab">
        <span className="user-icon">
          <i className="fa-solid fa-user"></i>
        </span>
        <span className="title">Welcome user!</span>
      </div>
      <div className="list">
        <ul className="side-links">
          <li>
            <a href="#0" className="sidelist">
              <span className="icons">
                <i className="fa-solid fa-list"></i>
              </span>
              <span className="title">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#0" className="sidelist">
              <span className="icons">
                <i className="fa-solid fa-book"></i>
              </span>
              <span className="title">Dictionary</span>
            </a>
          </li>
          <li>
            <a href="#0" className="sidelist">
              <span className="icons">
                <i className="fa-solid fa-user"></i>
              </span>
              <span className="title">Account</span>
            </a>
          </li>
          <li>
            <a href="#0" className="sidelist">
              <span className="icons">
                <i className="fa-solid fa-ticket"></i>
              </span>
              <span className="title">Support</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="weather-bottom">
        <div className="background"></div>
        <input type="text" name="search" id="search" />
        <div className="weather-head">
          <img src="./images/open-weather/rain-icon.png" />
          <div className="description">
            <h1>Manila</h1>
            <h3>20°C</h3>
            <p>feels like: cold</p>
          </div>
        </div>
        <div className="weather-footer">
          <div className="box">
            <h4>Humidity</h4>
            <p>20%</p>
          </div>
          <div className="box">
            <h4>Wind Speed</h4>
            <p>20 MPH</p>
          </div>
          <div className="box">
            <h4>Pressure</h4>
            <p>30%</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
