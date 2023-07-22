import WeatherApp from "../index";
import { useSelector } from "react-redux";
import ForecastTile from "../../components/WeatherTile/ForecastTile";
import { selectForecastData, selectWeatherData } from "../weatherSlice";
import Button from "../../components/Button";

const ForecastWeather = () => {
  const forecastData = useSelector(selectForecastData);
  const weatherData = useSelector(selectWeatherData);

  return (
    <WeatherApp>
      <Button path={"/"} name={"Current weather"} forecast />
      <ForecastTile data={weatherData} forecastData={forecastData} />
    </WeatherApp>
  );
};

export default ForecastWeather;
