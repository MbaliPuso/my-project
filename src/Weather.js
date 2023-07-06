import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({loaded: false});
    
    function handleResponse(response) {
        setWeatherData({
            loaded: true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            city: response.data.name,
            icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
        });
    }
    
    if (weatherData.loaded) {
        return (
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                    <input type="search"
                    placeholder="Enter a city"
                    className="form-control"
                    autoFocus="on" 
                    />
                    </div>
                    <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary w-100" />
                    </div>
                    </div>
                </form>
                <h1>{weatherData.city}</h1>
                <ul>
                    <li><FormattedDate date={weatherData.date}/></li>
                    <li className="text-capitalize">{weatherData.description}</li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="d-flex">    
                    <img src={weatherData.icon} alt="sunny-icon" className="float-left"/>
                    <div className="float-left">
                    <span className="temperature">{Math.round(weatherData.temperature)}</span> 
                    <span className="unit">°C</span>
                    </div>
                    </div>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Humidity: {weatherData.humidity} %</li>
                            <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                        </ul>
                    </div>
                </div>
            </div>
            );
    } else {
        const apiKey = "97c2f6a3b34509ac62090edc5d18d949";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }  
}