import {
  FavouriteIcon,
  IconInfoWrapper,
  MainWrapper,
  Title,
  HeadingWrapper,
  Info,
  InfoWrapper,
  SpecialInfo,
  HourlyWrapper,
} from "./styled";
import DateComponent from "../Date";
import { useSelector } from "react-redux";
import { selectHourlyWeather } from "../../features/Current/currentSlice";
import Icon from "../Icon";
import Slider from "./Slider";

const WeatherTile = ({ data, saveInFav, isAddedToFav }) => {
  const hourlyWeather = useSelector(selectHourlyWeather);

  return (
    <MainWrapper>
      <HeadingWrapper>
        <Title>
          {data.location.name}{" "}
          <FavouriteIcon onClick={saveInFav} added={isAddedToFav} />
        </Title>
        <DateComponent localtime={data.location.localtime_epoch} />
      </HeadingWrapper>

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
          <Info>Feels like: {data.current.feelslike_c.toFixed(0)}&#176;C</Info>
          <Info>Pressure: {data.current.pressure_mb} hPA</Info>
        </InfoWrapper>
        <InfoWrapper additionalInfo="true">
          <Info>Humidify: {data.current.humidity}%</Info>
          <Info>Wind speed: {data.current.gust_kph} km/h</Info>
        </InfoWrapper>
      </InfoWrapper>

      <InfoWrapper hourlyWrapper="true">
        {hourlyWeather.map((hourly, index) => (
          <HourlyWrapper key={index}>
            <Info>{index === 0 ? "Now" : hourly.time.split(" ")[1]}</Info>
            <Icon
              hourly="true"
              code={hourly.condition.code}
              isDay={data.current.is_day}
            />
            <Info hourly="true">{hourly.temp_c.toFixed(0)}&#176;C</Info>
          </HourlyWrapper>
        ))}
      </InfoWrapper>
    </MainWrapper>
  );
};

export default WeatherTile;
