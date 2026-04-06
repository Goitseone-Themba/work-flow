
import React, { useEffect, useState } from 'react';
import './WeatherWidget.css';
import axios from 'axios';

export const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState({
    date: new Date().toLocaleDateString(),
    city: "Loading...",
    temperature: "Loading...",
    weatherImage: "https://via.placeholder.com/50"
  });

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = '16b0e7812e0340e59d3135415242107'; 
        const city = 'Gaborone'; 
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );
        const data = response.data;
        setWeatherData({
          date: new Date().toLocaleDateString(),
          city: data.name,
          temperature: `${data.main.temp}°C`,
          weatherImage: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        });
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="weather-widget">
      <p>{weatherData.date}</p>
      <h2>{weatherData.city}</h2>
      <h1>{weatherData.temperature}</h1>
      <img src={weatherData.weatherImage} alt="weather" className="weather-image" />
    </div>
  );
};

export default WeatherWidget;



