import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCurrentData } from "../getCurrentData";
import { saveSearchesInLocalStorage } from "../../core/saveInLocalStorage";
import { LoaderIcon } from "../../components/StatusInfo/Loading/styled";
import CurrentTile from "../../components/WeatherTile/CurrentTile";
import {
  selectDoneSearches,
  selectSearchValues,
  setSearch,
  toggleSearchToFavourite,
} from "../../components/Search/searchSlice";
import {
  addContentHidden,
  clearState,
  selectForecastData,
  selectHourlyWeatherData,
  selectIsForecast,
  selectWeatherData,
  setForecastSection,
  setWeatherData,
} from "../weatherSlice";
import Error from "../../components/StatusInfo/Error";
import WeatherApp from "../index";
import Button from "../../components/Button";
import ForecastTile from "../../components/WeatherTile/ForecastTile";
import Section from "../../components/Section";
import { useSwipeable } from "react-swipeable";
import { TouchEventsArea } from "../../components/WeatherTile/styled";

const CurrentWeather = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchValues = useSelector(selectSearchValues);
  const doneSearches = useSelector(selectDoneSearches);
  const weatherData = useSelector(selectWeatherData);
  const forecastData = useSelector(selectForecastData);
  const hourlyWeatherData = useSelector(selectHourlyWeatherData);
  const isForecast = useSelector(selectIsForecast);

  const [isFavourite, setIsFavourite] = useState(false);

  const handleVerticalSwipes = useSwipeable({
    onSwipedRight: () => {
      const cityIndex = doneSearches.findIndex(
        ({ id }) => id === searchValues.id
      );

      if (cityIndex !== 0) {
        dispatch(clearState());
        dispatch(setSearch(doneSearches[cityIndex - 1]));
        navigate(`/weather/${doneSearches[cityIndex - 1].name}`);
      }
    },
    onSwipedLeft: () => {
      const cityIndex = doneSearches.findIndex(
        ({ id }) => id === searchValues.id
      );

      if (cityIndex !== doneSearches.length - 1) {
        dispatch(clearState());
        dispatch(setSearch(doneSearches[cityIndex + 1]));
        navigate(`/weather/${doneSearches[cityIndex + 1].name}`);
      }
    },
  });

  const { data, isLoading, isError } = useQuery(
    ["searchedCityWeather", { searchValues }],
    () => {
      if (!!searchValues) {
        const stringifyCoordinates = `${searchValues.lat.toString()},${searchValues.lon.toString()}`;
        return getCurrentData(stringifyCoordinates, 3);
      }
    }
  );

  useEffect(() => {
    if (doneSearches.length > 0 && !!searchValues) {
      const searchIndex = doneSearches.findIndex(
        ({ id }) => id === searchValues.id
      );
      setIsFavourite(doneSearches[searchIndex].fav);
    }
    saveSearchesInLocalStorage(doneSearches);
  }, [doneSearches, searchValues]);

  useEffect(() => {
    if (!!data) {
      dispatch(setWeatherData(data));
      dispatch(addContentHidden());
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (searchValues === null) {
      navigate(`/`);
    }
  }, [searchValues]);

  return (
    <WeatherApp current="true">
      {isLoading && (
        <Section>
          <LoaderIcon />
        </Section>
      )}
      {isError && (
        <Section>
          <Error />
        </Section>
      )}
      {!!weatherData && !isLoading && (
        <>
          <Section>
            <CurrentTile
              data={weatherData}
              favOnClick={() =>
                dispatch(toggleSearchToFavourite(searchValues.id))
              }
              savedInFav={isFavourite}
              hourlyData={hourlyWeatherData}
              touchHandlers={handleVerticalSwipes}
            />
          </Section>
          <Section forecastSection activeSection={isForecast}>
            <Button
              name={"Forecast"}
              forecast="true"
              iconDown={isForecast}
              handleOnClick={() => dispatch(setForecastSection())}
            />
            <ForecastTile
              data={weatherData}
              forecastData={forecastData}
              favOnClick={() =>
                dispatch(toggleSearchToFavourite(searchValues.id))
              }
              savedInFav={isFavourite}
            />
          </Section>
        </>
      )}
    </WeatherApp>
  );
};

export default CurrentWeather;
