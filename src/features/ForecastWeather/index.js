import WeatherApp from "../index";
import { useSelector } from "react-redux";
import ForecastTile from "../../components/WeatherTile/ForecastTile";
import { selectForecastData, selectWeatherData } from "../weatherSlice";
import Button from "../../components/Button";
import React from "react";
import { Navigate } from "react-router-dom";

const ForecastWeather = () => {
  const forecastData = useSelector(selectForecastData);
  const weatherData = useSelector(selectWeatherData);

  if (!weatherData) {
    return <Navigate to={"/"} />;
  }

  return (
    <WeatherApp>
      <Button path={"/"} name={"Current weather"} forecast />
      {!!weatherData && (
        <ForecastTile data={weatherData} forecastData={forecastData} />
      )}
    </WeatherApp>
  );
};

export default ForecastWeather;
