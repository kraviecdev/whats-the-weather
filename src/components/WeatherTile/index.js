import { ArticleWrapper } from "./styled";
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
    <ArticleWrapper forecast={forecast}>
      <WeatherTileHeading
        title={title}
        favOnClick={favOnClick}
        savedInFav={savedInFav}
        localtime={localtime}
        forecast={forecast}
      />
      {children}
    </ArticleWrapper>
  );
};

export default WeatherTile;
