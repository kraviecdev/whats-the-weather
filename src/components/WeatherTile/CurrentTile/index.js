import {
  IconInfoWrapper,
  Info,
  InfoWrapper,
  SpecialInfo,
  HourlyWrapper,
} from "../styled";
import Icon from "../../Icon";
import Slider from "../Slider";
import WeatherTile from "../index";

const CurrentTile = ({ data, saveInFav, isAddedToFav, hourlyData }) => {
  const localtime = new Date(data.location.localtime).getTime();
  const currentHour = new Date(localtime).getHours();

  return (
    <WeatherTile
      localtime={localtime}
      title={data.location.name}
      favOnClick={saveInFav}
      savedInFav={isAddedToFav}
    >
      <Slider />

      <InfoWrapper>
        <Info temperature="true">
          {data.current.temp_c.toFixed(0)}
          <SpecialInfo>&#176;C</SpecialInfo>
        </Info>
        <IconInfoWrapper>
          <Icon
            code={data.current.condition.code}
            isDay={data.current.is_day}
          />
          <Info>{data.current.condition.text}</Info>
        </IconInfoWrapper>
      </InfoWrapper>

      <InfoWrapper additionalWrapper="true">
        <InfoWrapper additionalInfo="true">
          <Info>
            Feels like: <b>{data.current.feelslike_c.toFixed(0)}&#176;C</b>
          </Info>
          <Info>
            Pressure: <b>{data.current.pressure_mb} hPA</b>
          </Info>
        </InfoWrapper>
        <InfoWrapper additionalInfo="true">
          <Info>
            Humidify: <b>{data.current.humidity}%</b>
          </Info>
          <Info>
            Wind speed: <b>{data.current.gust_kph} km/h</b>
          </Info>
        </InfoWrapper>
      </InfoWrapper>

      <InfoWrapper hourlyWrapper="true">
        {hourlyData &&
          hourlyData
            .slice(currentHour, currentHour + 24)
            .map((hourly, index) => (
              <HourlyWrapper key={index}>
                <Info first={index === 0}>
                  {index === 0 ? "Now" : hourly.time.split(" ")[1]}
                </Info>
                <Icon
                  hourly="true"
                  code={hourly.condition.code}
                  isDay={data.current.is_day}
                />
                <Info first={index === 0} hourly="true">
                  {hourly.temp_c.toFixed(0)}&#176;C
                </Info>
              </HourlyWrapper>
            ))}
      </InfoWrapper>
    </WeatherTile>
  );
};

export default CurrentTile;
