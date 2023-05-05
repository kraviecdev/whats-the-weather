import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentData } from "../getCurrentData";
import {
  selectCityWeather,
  setCityWeather,
  setHourlyWeather,
} from "./currentSlice";
import {
  selectDoneSearches,
  selectSearchValues,
  toggleSearchToFavourite,
} from "../../components/Search/searchSlice";
import WeatherTile from "../../components/WeatherTile";
import { LoaderIcon } from "../../components/StatusInfo/Loading/styled";
import Section from "../../components/Section";
import Search from "../../components/Search";
import { saveSearchesInLocalStorage } from "../../core/saveInLocalStorage";
import { Navigate } from "react-router-dom";
// import ForecastButton from "../../components/ForecastButton";

const Current = () => {
  const dispatch = useDispatch();
  const searchValues = useSelector(selectSearchValues);
  const cityWeather = useSelector(selectCityWeather);
  const doneSearches = useSelector(selectDoneSearches);

  const [isFavourite, setIsFavourite] = useState(false);

  const { data, isLoading } = useQuery(
    ["cityWeather", { searchValues }],
    () => {
      if (!!searchValues) {
        const stringifyCoordinates = `${searchValues.lat.toString()},${searchValues.lon.toString()}`;
        return getCurrentData(stringifyCoordinates);
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
      const currentDay = data.forecast.forecastday[0].hour;
      const nextDay = data.forecast.forecastday[1].hour;
      const hourly = [].concat(currentDay, nextDay);
      const currentHour = data.location.localtime.split(" ")[1].split(":")[0];
      dispatch(setCityWeather(data));
      dispatch(setHourlyWeather({ hourly: hourly, index: currentHour }));
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
        {!!cityWeather && !isLoading && (
          <WeatherTile
            data={cityWeather}
            saveInFav={() => dispatch(toggleSearchToFavourite(searchValues.id))}
            isAddedToFav={isFavourite}
          />
        )}
      </Section>
      {/*<ForecastButton />*/}
    </>
  );
};

export default Current;
