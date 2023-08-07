import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import { getCurrentData } from "../getCurrentData";
import { saveSearchesInLocalStorage } from "../../core/saveInLocalStorage";
import {
  selectDoneSearches,
  selectSearchValues,
  setSearch,
  toggleSearchToFavourite,
} from "../../components/Search/searchSlice";
import {
  addContentHidden,
  clearState,
  selectApplicationStatus,
  selectForecastData,
  selectHourlyWeatherData,
  selectIsForecast,
  selectWeatherData,
  setApplicationStatus,
  setForecastSection,
  setWeatherData,
} from "../weatherSlice";
import WeatherApp from "../index";
import Button from "../../components/Button";
import CurrentTile from "../../components/WeatherTile/CurrentTile";
import ForecastTile from "../../components/WeatherTile/ForecastTile";
import Section from "../../components/Section";
import Error from "../../components/StatusInfo/Error";
import Loading from "../../components/StatusInfo/Loading";

const CurrentWeather = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const applicationStatus = useSelector(selectApplicationStatus);
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

  const { data, isError, isLoading } = useQuery(
    ["searchedCityWeather", { searchValues }],
    () => {
      if (!!searchValues) {
        const stringifyCoordinates = `${searchValues.lat.toString()},${searchValues.lon.toString()}`;
        return getCurrentData(stringifyCoordinates, 3);
      }
    }
  );

  useEffect(() => {
    if (!!data) {
      dispatch(setWeatherData(data));
      dispatch(addContentHidden());

      setTimeout(() => {
        dispatch(setApplicationStatus("success"));
      }, 500);
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (doneSearches.length > 0 && !!searchValues) {
      const savedCity = doneSearches.find(({ id }) => id === searchValues.id);
      setIsFavourite(savedCity.fav);
    }
    saveSearchesInLocalStorage(doneSearches);
  }, [doneSearches, searchValues]);

  useEffect(() => {
    if (searchValues === null) {
      if (doneSearches.length > 0) {
        dispatch(setSearch(doneSearches[0]));
        navigate(`/weather/${doneSearches[0].name}`);
      } else {
        navigate(`/`);
      }
    }
  }, [searchValues]);

  return (
    <WeatherApp current="true">
      {(applicationStatus === "loading" || isLoading) && <Loading />}
      {isError && <Error />}
      {applicationStatus === "success" && (
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
