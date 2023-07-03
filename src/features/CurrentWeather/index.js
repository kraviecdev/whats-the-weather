import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getCurrentData } from "../getCurrentData";
import { saveSearchesInLocalStorage } from "../../core/saveInLocalStorage";
import Section from "../../components/Section";
import Search from "../../components/Search";
import { LoaderIcon } from "../../components/StatusInfo/Loading/styled";
import WeatherTile from "../../components/WeatherTile";
import {
  selectDoneSearches,
  selectSearchValues,
  toggleSearchToFavourite,
} from "../../components/Search/searchSlice";
import {
  selectHourlyWeatherData,
  selectWeatherData,
  setWeatherData,
} from "../weatherSlice";
// import ForecastButton from "../../components/ForecastButton";

const CurrentWeather = () => {
  const dispatch = useDispatch();
  const searchValues = useSelector(selectSearchValues);
  const doneSearches = useSelector(selectDoneSearches);
  const weatherData = useSelector(selectWeatherData);
  const hourlyWeatherData = useSelector(selectHourlyWeatherData);

  const [isFavourite, setIsFavourite] = useState(false);

  const { data, isLoading } = useQuery(
    ["searchedCityWeather", { searchValues }],
    () => {
      if (!!searchValues) {
        const stringifyCoordinates = `${searchValues.lat.toString()},${searchValues.lon.toString()}`;
        return getCurrentData(stringifyCoordinates, 2);
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
    }
  }, [data, dispatch]);

  if (!searchValues) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <Search />
      <Section>
        {isLoading && <LoaderIcon />}
        {!!weatherData && !isLoading && (
          <WeatherTile
            data={weatherData}
            saveInFav={() => dispatch(toggleSearchToFavourite(searchValues.id))}
            isAddedToFav={isFavourite}
            hourlyData={hourlyWeatherData}
          />
        )}
      </Section>
      {/*<ForecastButton />*/}
    </>
  );
};

export default CurrentWeather;
