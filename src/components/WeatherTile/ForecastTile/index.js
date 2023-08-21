import WeatherTile from "../index";
import ConditionsInfo from "../ConditionsInfo";
import TempInfo from "../TempInfo";
import { ArticleWrapper, Info, WeatherTileSection } from "../styled";
import Button from "../../Button";
import HourlyInfo from "../HourlyInfo";
import { useDispatch } from "react-redux";
import { setContentHidden } from "../../../features/weatherSlice";

const ForecastTile = ({ data, savedInFav, favOnClick, forecastData }) => {
  const dispatch = useDispatch();

  return (
    <WeatherTile
      title={data.location.name}
      savedInFav={savedInFav}
      favOnClick={favOnClick}
      additionalInfo="Forecast"
      forecastArticleWrapper="true"
    >
      <ArticleWrapper tileView>
        {forecastData &&
          forecastData.map((forecast, index) => (
            <ArticleWrapper tileArticle key={index}>
              <ArticleWrapper internalArticleWrapper>
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
                  visibility={forecast.day.avgvis_km.toFixed(1)}
                  children={
                    <>
                      <TempInfo
                        temp={forecast.day.maxtemp_c.toFixed(0)}
                        iconCode={100}
                        secondary="true"
                      />
                      <TempInfo
                        temp={forecast.day.mintemp_c.toFixed(0)}
                        iconCode={200}
                        secondary="true"
                      />
                    </>
                  }
                />
              </ArticleWrapper>
              <HourlyInfo
                hourlyData={forecast.hour}
                hourlyForecast={forecast.isContentHidden}
              />
              <Button
                articleButton
                iconDown={forecast.isContentHidden}
                handleOnClick={() => dispatch(setContentHidden(index))}
              />
            </ArticleWrapper>
          ))}
      </ArticleWrapper>
    </WeatherTile>
  );
};

export default ForecastTile;
