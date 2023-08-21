import React from "react";
import WeatherTileHeading from "../WeatherTileHeading";
import Slider from "../Slider";
import TempInfo from "../TempInfo";
import ConditionsInfo from "../ConditionsInfo";
import HourlyInfo from "../HourlyInfo";
import { ArticleWrapper, WeatherTileSection } from "../styled";

const CurrentTile = ({
  data,
  favOnClick,
  savedInFav,
  hourlyData,
  touchHandlers,
}) => {
  const localtime = data.location.localtime_epoch * 1000;
  const currentHour = new Date(data.location.localtime).getHours();

  return (
    <ArticleWrapper>
      <WeatherTileHeading
        title={data.location.name}
        localtime={localtime}
        favOnClick={favOnClick}
        savedInFav={savedInFav}
      />

      <Slider />

      <div {...touchHandlers}>
        <WeatherTileSection>
          <TempInfo
            main
            temp={data.current.temp_c.toFixed(0)}
            iconCode={data.current.condition.code}
            isDay={data.current.is_day}
            conditionText={data.current.condition.text}
          />
        </WeatherTileSection>

        <WeatherTileSection additionalContentSection borderBottom>
          <ConditionsInfo
            main
            feelsLike={data.current.feelslike_c.toFixed(0)}
            pressure={data.current.pressure_mb}
            humidity={data.current.humidity}
            wind={data.current.gust_kph}
          />
        </WeatherTileSection>
      </div>

      <WeatherTileSection hourlyContentSection>
        <HourlyInfo hourlyData={hourlyData} currentHour={currentHour} />
      </WeatherTileSection>
    </ArticleWrapper>
  );
};

export default CurrentTile;
