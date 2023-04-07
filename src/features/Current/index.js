import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./getData";
import {
  selectCityWeather,
  setCityWeather,
  setHourlyWeather,
} from "./currentSlice";
import { selectSearchValues } from "../../components/Search/searchSlice";
import WeatherTile from "../../components/WeatherTile";
import { LoaderIcon } from "../../components/StatusInfo/Loading/styled";

const Current = () => {
  const dispatch = useDispatch();
  const searchValues = useSelector(selectSearchValues);
  const cityWeather = useSelector(selectCityWeather);

  const { data, isLoading } = useQuery(
    ["cityWeather", { searchValues }],
    () => {
      if (!!searchValues) {
        const stringifyCoordinates = `${searchValues.lat.toString()},${searchValues.lon.toString()}`;
        return getData(stringifyCoordinates);
      }
    }
  );

  useEffect(() => {
    if (!!data) {
      const hourlyDay = data.forecast.forecastday[0].hour;
      const currentHour = new Date(
        data.location.localtime_epoch * 1000
      ).getHours();
      dispatch(setCityWeather(data));
      dispatch(setHourlyWeather({ hourly: hourlyDay, index: currentHour }));
    }
  }, [data, dispatch]);

  return (
    <>
      {isLoading && <LoaderIcon />}
      {!!cityWeather && !isLoading && <WeatherTile data={cityWeather} />}
    </>
  );
};

export default Current;
