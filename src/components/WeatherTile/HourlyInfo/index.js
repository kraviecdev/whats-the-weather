import { Info, WeatherTileWrapper, WeatherTileSection } from "../styled";
import Icon from "../TempInfo/IconInfo/Icon";

const HourlyInfo = ({ hourlyData, currentHour }) => {
  return (
    <WeatherTileSection hourlyContentSection>
      {hourlyData &&
        hourlyData.slice(currentHour, currentHour + 24).map((hourly, index) => (
          <WeatherTileWrapper hourlyInfoWrapper key={index}>
            <Info larger={index === 0}>
              {index === 0 ? "Now" : hourly.time.split(" ")[1]}
            </Info>
            <Icon hourly code={hourly.condition.code} isDay={hourly.is_day} />
            <Info larger={index === 0}>{hourly.temp_c.toFixed(0)}&#176;C</Info>
          </WeatherTileWrapper>
        ))}
    </WeatherTileSection>
  );
};

export default HourlyInfo;
