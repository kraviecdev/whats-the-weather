import {
  FavouriteIcon,
  HeadingWrapper,
  Info,
  MainWrapper,
  Title,
} from "./styled";
import DateComponent from "../Date";

const WeatherTile = ({
  title,
  favOnClick,
  savedInFav,
  localtime,
  forecast,
  children,
}) => {
  return (
    <MainWrapper>
      <HeadingWrapper>
        <Title>
          {title}
          {""}
          <FavouriteIcon onClick={favOnClick} added={savedInFav} />
        </Title>
        {localtime && <DateComponent localtime={localtime} />}
        {forecast && <Info>14-day forecast</Info>}
      </HeadingWrapper>
      {children}
    </MainWrapper>
  );
};

export default WeatherTile;
