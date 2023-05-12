import { React, useState } from "react";
import axios from "axios";

export default function Sidebar() {
    const [data, setData] = useState({});
    const [city, setLocation] = useState("");
    const Weatherkey = "36b90ff89a52d49f85627b18ea50ed81";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Weatherkey}`;

    const searchLocation = (event) => {
        if (event.key === "Enter") {
            axios.get(url).then((response) => {
                setData(response.data);
                console.log(response.data);
            });
            setLocation("");
        }
    };
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
                <input
                    type="text"
                    name="location"
                    id="city"
                    value={city}
                    onChange={(event) => setLocation(event.target.value)}
                    placeholder="Enter Location"
                    onKeyPress={searchLocation}
                />
                <div className="weather-container">
                    <div className="weather-head">
                        <div className="weather-city">
                            <p>{data.name}</p>
                        </div>
                        <div>
                            <div className="weather-temp">
                                {data.main ? (
                                    <h1 className="temp">
                                        {data.main.temp.toFixed()}°C
                                    </h1>
                                ) : null}
                            </div>
                            <div className="weather-description">
                                {data.weather ? (
                                    <p>{data.weather[0].main}</p>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className="weather-footer">
                        <div className="feels box">
                            {data.main ? (
                                <p className="bold">
                                    {data.main.feels_like.toFixed()}°C
                                </p>
                            ) : null}
                            <p className="title">Feels like</p>
                        </div>
                        <div className="humidity box">
                            {data.main ? (
                                <p className="bold">{data.main.humidity}%</p>
                            ) : null}
                            <p className="title">Humidity</p>
                        </div>
                        <div className="windspeed box">
                            {data.wind ? (
                                <p className="bold">
                                    {data.wind.speed.toFixed()} MPH
                                </p>
                            ) : null}
                            <p className="title">Windspeed</p>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
