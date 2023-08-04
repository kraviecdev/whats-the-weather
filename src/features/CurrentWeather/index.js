import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getCurrentData } from "../getCurrentData";
import { saveSearchesInLocalStorage } from "../../core/saveInLocalStorage";
import { LoaderIcon } from "../../components/StatusInfo/Loading/styled";
import CurrentTile from "../../components/WeatherTile/CurrentTile";
import {
  selectDoneSearches,
  selectSearchValues,
  toggleSearchToFavourite,
} from "../../components/Search/searchSlice";
import {
  addContentHidden,
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

const CurrentWeather = () => {
  const dispatch = useDispatch();
  const searchValues = useSelector(selectSearchValues);
  const doneSearches = useSelector(selectDoneSearches);
  const weatherData = useSelector(selectWeatherData);
  const forecastData = useSelector(selectForecastData);
  const hourlyWeatherData = useSelector(selectHourlyWeatherData);
  const isForecast = useSelector(selectIsForecast);

  const [isFavourite, setIsFavourite] = useState(false);

  const handleForecastSectionButton = () => {
    if (isForecast === "open") {
      dispatch(setForecastSection("closed"));
    }

    if (isForecast === "closed") {
      dispatch(setForecastSection("open"));
    }
  };

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

  if (!searchValues) {
    return <Navigate to={"/"} />;
  }

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
            />
          </Section>
          <Section forecastSection activeSection={isForecast === "open"}>
            <Button
              name={"Forecast"}
              forecast="true"
              iconDown={isForecast === "open"}
              handleOnClick={() => handleForecastSectionButton()}
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
