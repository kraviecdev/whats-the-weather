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
  additionalInfo,
}) => {
  return (
    <WeatherTileHeadingWrapper>
      <WeatherTileTitle>
        {title}
        {""}
        <WeatherTileFavouriteIcon onClick={favOnClick} added={savedInFav} />
      </WeatherTileTitle>
      {localtime ? (
        <DateComponent localtime={localtime} />
      ) : (
        <Info larger="true">{additionalInfo}</Info>
      )}
    </WeatherTileHeadingWrapper>
  );
};

export default WeatherTileHeading;
