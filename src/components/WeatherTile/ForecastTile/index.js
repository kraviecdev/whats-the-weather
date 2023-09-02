import Section from "../../Section";
import WeatherTileHeading from "../WeatherTileHeading";
import ConditionsInfo from "../ConditionsInfo";
import TempInfo from "../TempInfo";
import Button from "../../Button";
import HourlyInfo from "../HourlyInfo";
import {
  ArticleWrapper,
  Info,
  WeatherTileSection,
  WeatherTileWrapper,
} from "../styled";
import { useDispatch } from "react-redux";
import { setContentHidden } from "../../../features/weatherSlice";

const ForecastTile = ({ data, savedInFav, favOnClick, forecastData }) => {
  const dispatch = useDispatch();

  return (
    <>
      <WeatherTileHeading
        title={data.location.name}
        additionalInfo="Forecast"
        favOnClick={favOnClick}
        savedInFav={savedInFav}
      />

      <Section tileView>
        {forecastData &&
          forecastData.map((forecast, index) => (
            <ArticleWrapper tileArticle key={index}>
              <Section rowGap>
                <WeatherTileWrapper noPadding additionalInfoWrapper>
                  <Info bold>
                    {new Intl.DateTimeFormat("en", { weekday: "long" }).format(
                      forecast.date_epoch * 1000
                    )}
                  </Info>
                  <Info>{forecast.date.split("-").reverse().join(".")}</Info>
                </WeatherTileWrapper>

                <WeatherTileSection additionalContentSection>
                  <ConditionsInfo
                    secondary
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
                </WeatherTileSection>
              </Section>

              <WeatherTileSection
                hourlyContentSection
                contentHidden={forecast.isContentHidden}
              >
                <HourlyInfo hourlyData={forecast.hour} />
              </WeatherTileSection>

              <Button
                articleButton
                iconDown={forecast.isContentHidden}
                handleOnClick={() =>
                  dispatch(setContentHidden({ cities: false, index: index }))
                }
              />
            </ArticleWrapper>
          ))}
      </Section>
    </>
  );
};

export default ForecastTile;
