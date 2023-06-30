import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import { getCurrentData } from "../getCurrentData";
import { Navigate } from "react-router-dom";
import Section from "../../components/Section";
import Search from "../../components/Search";
import WeatherTile from "../../components/WeatherTile";
import { LoaderIcon } from "../../components/StatusInfo/Loading/styled";
import {
  selectDoneSearches,
  setSearch,
} from "../../components/Search/searchSlice";
import {
  selectGeoAgreement,
  selectGeoCoordinates,
  selectHourlyWeatherData,
  selectWeatherData,
  setGeoAgreement,
  setGeoCoordinates,
  setHourlyWeatherData,
  setWeatherData,
} from "../weatherSlice";
// import ForecastButton from "../../components/ForecastButton";

const CurrentPositionWeather = () => {
  const geoAgreement = useSelector(selectGeoAgreement);
  const geoCoordinates = useSelector(selectGeoCoordinates);
  const geoWeatherDate = useSelector(selectWeatherData);
  const geoHourlyWeatherData = useSelector(selectHourlyWeatherData);
  const doneSearches = useSelector(selectDoneSearches);
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) =>
        dispatch(
          setGeoCoordinates({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          })
        ),
      () => dispatch(setGeoAgreement())
    );
  }, [dispatch]);

  const { data, isLoading } = useQuery(
    ["currentPositionWeather", { geoCoordinates }],
    () => {
      if (!!geoCoordinates) {
        const stringifyCoordinates = `${geoCoordinates.lat.toString()},${geoCoordinates.lon.toString()}`;
        return getCurrentData(stringifyCoordinates);
      }
    }
  );

  useEffect(() => {
    if (!!data) {
      const currentDay = data.forecast.forecastday[0].hour;
      const nextDay = data.forecast.forecastday[1].hour;
      const hourly = [].concat(currentDay, nextDay);
      const currentHour = data.location.localtime.split(" ")[1].split(":")[0];
      dispatch(setWeatherData(data));
      dispatch(setHourlyWeatherData({ hourly: hourly, index: currentHour }));
    }
  }, [data, dispatch]);

  if (geoAgreement && doneSearches.length > 0) {
    dispatch(setSearch(doneSearches[0]));
    return <Navigate to={`/weather/${doneSearches[0].name}`} />;
  }

  return (
    <>
      <Search />
      <Section>
        {isLoading && <LoaderIcon />}
        {!!geoWeatherDate && !isLoading && (
          <WeatherTile
            data={geoWeatherDate}
            isAddedToFav="true"
            hourlyData={geoHourlyWeatherData}
          />
        )}
        {geoAgreement && <h3>Enter city name for weather</h3>}
      </Section>
      {/*<ForecastButton />*/}
    </>
  );
};

export default CurrentPositionWeather;
