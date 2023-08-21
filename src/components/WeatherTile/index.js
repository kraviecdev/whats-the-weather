import { ArticleWrapper } from "./styled";
import WeatherTileHeading from "./WeatherTileHeading";

const WeatherTile = ({
  title,
  favOnClick,
  savedInFav,
  localtime,
  additionalInfo,
  forecastArticleWrapper,
  children,
}) => {
  return (
    <ArticleWrapper forecastArticleWrapper={forecastArticleWrapper}>
      <WeatherTileHeading
        title={title}
        favOnClick={favOnClick}
        savedInFav={savedInFav}
        localtime={localtime}
        additionalInfo={additionalInfo}
      />
      {children}
    </ArticleWrapper>
  );
};

export default WeatherTile;
