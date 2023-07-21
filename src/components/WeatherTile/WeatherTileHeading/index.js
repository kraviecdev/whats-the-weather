import {
  WeatherTileFavouriteIcon,
  WeatherTileHeadingWrapper,
  WeatherTileTitle,
} from "./styled";
import { Info } from "../styled";
import DateComponent from "./Date";

const WeatherTileHeading = ({
  title,
  favOnClick,
  savedInFav,
  localtime,
  forecast,
}) => {
  return (
    <WeatherTileHeadingWrapper>
      <WeatherTileTitle>
        {title}
        {""}
        <WeatherTileFavouriteIcon onClick={favOnClick} added={savedInFav} />
      </WeatherTileTitle>
      {localtime && <DateComponent localtime={localtime} />}
      {forecast && <Info larger="true">Forecast</Info>}
    </WeatherTileHeadingWrapper>
  );
};

export default WeatherTileHeading;
