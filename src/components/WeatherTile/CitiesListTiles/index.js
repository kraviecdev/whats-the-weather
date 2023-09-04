import { setContentHidden } from "../../../features/weatherSlice";
import { selectDoneSearches, toggleFavourite } from "../../Search/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { ArticleWrapper, WeatherTileSection } from "../styled";
import Button from "../../Button";
import Section from "../../Section";
import WeatherTileHeading from "../WeatherTileHeading";
import TempInfo from "../TempInfo";
import ConditionsInfo from "../ConditionsInfo";
import HourlyInfo from "../HourlyInfo";

const CitiesListTiles = ({ cities }) => {
  const dispatch = useDispatch();
  const doneSearches = useSelector(selectDoneSearches);

  return (
    <Section tileView citiesSection>
      {cities &&
        cities.map((city, index) => (
          <ArticleWrapper tileArticle key={index}>
            <Section rowGap>
              <WeatherTileHeading
                secondary
                savedInFav={
                  doneSearches.find((search) => search.id === city.id).favourite
                }
                title={city.location.name}
                additionalInfo={city.location.country}
                favOnClick={() => dispatch(toggleFavourite(city.id))}
              />

              <TempInfo
                secondary="true"
                iconCode={city.current.condition.code}
                isDay={city.current.is_day}
                temp={city.current.temp_c.toFixed(0)}
              />
            </Section>

            <WeatherTileSection
              citiesSection
              contentHidden={city.isContentHidden}
            >
              <WeatherTileSection additionalContentSection borderBottom>
                <ConditionsInfo
                  main
                  pressure={city.current.pressure_mb}
                  wind={city.current.wind_kph}
                  humidity={city.current.humidity}
                  feelsLike={city.current.feelslike_c.toFixed(0)}
                />
              </WeatherTileSection>

              <WeatherTileSection hourlyContentSection>
                <HourlyInfo
                  currentHour={new Date(city.location.localtime).getHours()}
                  hourlyData={city.forecast}
                />
              </WeatherTileSection>
            </WeatherTileSection>

            <Button
              articleButton
              iconDown={city.isContentHidden}
              handleOnClick={() =>
                dispatch(setContentHidden({ cities: true, index: index }))
              }
            />
          </ArticleWrapper>
        ))}
    </Section>
  );
};

export default CitiesListTiles;
