import { ArticleWrapper } from "../styled";
import Button from "../../Button";
import WeatherTileHeading from "../WeatherTileHeading";
import TempInfo from "../TempInfo";
import ConditionsInfo from "../ConditionsInfo";
import HourlyInfo from "../HourlyInfo";

const CitiesListTiles = ({ cities, handleOnClick, favOnClick }) => {
  return (
    <ArticleWrapper tileView>
      {cities &&
        cities.map((city, index) => (
          <ArticleWrapper tileArticle key={index}>
            <ArticleWrapper internalArticleWrapper>
              <WeatherTileHeading
                savedInFav={true}
                title={city.location.name}
                favOnClick={favOnClick}
              />
              <TempInfo
                secondary="true"
                iconCode={city.current.condition.code}
                isDay={city.current.is_day}
                temp={city.current.temp_c}
              />
            </ArticleWrapper>
            <ConditionsInfo
              basic="true"
              wind={city.current.gust_kph}
              humidity={city.current.humidity}
              pressure={city.current.pressure_mb}
              feelsLike={city.current.feelslike_c}
            />
            <HourlyInfo hourlyData={city.hourlyWeather} />
            <Button
              articleButton
              iconDown={city.isAdditionalContentVisible}
              handleOnClick={handleOnClick}
            />
          </ArticleWrapper>
        ))}
    </ArticleWrapper>
  );
};

export default CitiesListTiles;
