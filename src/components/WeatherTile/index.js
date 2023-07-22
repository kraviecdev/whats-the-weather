import { ArticleWrapper } from "./styled";
import WeatherTileHeading from "./WeatherTileHeading";

const WeatherTile = ({
  tileView,
  title,
  favOnClick,
  savedInFav,
  localtime,
  forecast,
  children,
}) => {
  return (
    <ArticleWrapper tileView={tileView}>
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
