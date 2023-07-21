import { MainWrapper } from "./styled";
import WeatherTileHeading from "./WeatherTileHeading";

const WeatherTile = ({
  title,
  favOnClick,
  savedInFav,
  localtime,
  forecast,
  children,
}) => {
  return (
    <MainWrapper forecast={forecast}>
      <WeatherTileHeading
        title={title}
        favOnClick={favOnClick}
        savedInFav={savedInFav}
        localtime={localtime}
        forecast={forecast}
      />
      {children}
    </MainWrapper>
  );
};

export default WeatherTile;
