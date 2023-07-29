import { Info, WeatherTileWrapper, WeatherTileSection } from "../styled";
import Icon from "../TempInfo/IconInfo/Icon";

const HourlyInfo = ({ hourlyData, currentHour }) => {
  const hourly = currentHour
    ? hourlyData.slice(currentHour, currentHour + 24)
    : hourlyData;

  return (
    <WeatherTileSection hourlyContentSection>
      {hourlyData &&
        hourly.map((hourly, index) => (
          <WeatherTileWrapper hourlyInfoWrapper key={index}>
            <Info larger={currentHour && index === 0 ? true : false}>
              {currentHour && index === 0
                ? "Now"
                : `${hourly.time.split(" ")[1]}`}
            </Info>
            <Icon hourly code={hourly.condition.code} isDay={hourly.is_day} />
            <Info larger={currentHour && index === 0 ? true : false}>
              {hourly.temp_c.toFixed(0)}&#176;C
            </Info>
          </WeatherTileWrapper>
        ))}
    </WeatherTileSection>
  );
};

export default HourlyInfo;
