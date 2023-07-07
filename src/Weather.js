import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({loaded: false});
    const [city, setCity] = useState(props.defaultCity);
    
    function handleResponse(response) {
        setWeatherData({
            loaded: true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            city: response.data.name,
            icon: response.data.weather[0].icon,
        });
    }

    function search() {
        const apiKey = "97c2f6a3b34509ac62090edc5d18d949";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCity(event) {
        setCity(event.target.value);
    }
    
    if (weatherData.loaded) {
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                    <input type="search"
                    placeholder="Enter a city"
                    className="form-control"
                    autoFocus="on"
                    onChange={handleCity} 
                    />
                    </div>
                    <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary w-100" />
                    </div>
                    </div>
                </form>
                <WeatherInfo data={weatherData} />
                
            </div>
            );
    } else {
        search();
        return "Loading...";
    }  
}