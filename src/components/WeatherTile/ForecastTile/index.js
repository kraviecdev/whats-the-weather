import WeatherTile from "../index";
import ConditionsInfo from "../ConditionsInfo";
import TempInfo from "../TempInfo";
import { ArticleWrapper, Info, WeatherTileSection } from "../styled";

const ForecastTile = ({ data, saveInFav, isAddedToFav, forecastData }) => {
  return (
    <WeatherTile
      title={data.location.name}
      savedInFav={saveInFav}
      favOnClick={isAddedToFav}
      tileView
      forecast="true"
    >
      {forecastData &&
        forecastData.map((forecast, index) => (
          <ArticleWrapper additionalArticleWrapper key={index}>
            <WeatherTileSection>
              <Info bold>
                {new Intl.DateTimeFormat("en", { weekday: "long" }).format(
                  forecast.date_epoch * 1000
                )}
              </Info>
              <Info>{forecast.date.split("-").reverse().join(".")}</Info>
            </WeatherTileSection>
            <ConditionsInfo
              secondary="true"
              wind={forecast.day.maxwind_kph}
              humidity={forecast.day.avghumidity}
              children={
                <>
                  <TempInfo
                    temp={forecast.day.maxtemp_c.toFixed(0)}
                    iconCode={forecast.day.condition.code}
                    isDay={1}
                    secondary="true"
                  />
                  <TempInfo
                    temp={forecast.day.mintemp_c.toFixed(0)}
                    iconCode={forecast.day.condition.code}
                    isDay={0}
                    secondary="true"
                  />
                </>
              }
            />
          </ArticleWrapper>
        ))}
    </WeatherTile>
  );
};

export default ForecastTile;
