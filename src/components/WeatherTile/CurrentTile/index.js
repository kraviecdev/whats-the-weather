import Slider from "../Slider";
import WeatherTile from "../index";
import TempInfo from "../TempInfo";
import ConditionsInfo from "../ConditionsInfo";
import { WeatherTileSection } from "../styled";
import HourlyInfo from "../HourlyInfo";

const CurrentTile = ({ data, favOnClick, savedInFav, hourlyData }) => {
  const localtime = new Date(data.location.localtime).getTime();
  const currentHour = new Date(localtime).getHours();

  return (
    <WeatherTile
      localtime={localtime}
      title={data.location.name}
      favOnClick={favOnClick}
      savedInFav={savedInFav}
    >
      <Slider />

      <WeatherTileSection>
        <TempInfo
          temp={data.current.temp_c.toFixed(0)}
          iconCode={data.current.condition.code}
          isDay={data.current.is_day}
          conditionText={data.current.condition.text}
          main="true"
        />
      </WeatherTileSection>

      <ConditionsInfo
        basic="true"
        feelsLike={data.current.feelslike_c.toFixed(0)}
        pressure={data.current.pressure_mb}
        humidity={data.current.humidity}
        wind={data.current.gust_kph}
      />

      <HourlyInfo hourlyData={hourlyData} currentHour={currentHour} />
    </WeatherTile>
  );
};

export default CurrentTile;
