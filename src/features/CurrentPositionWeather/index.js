import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getCurrentData } from "../getCurrentData";
import { LoaderIcon } from "../../components/StatusInfo/Loading/styled";
import CurrentTile from "../../components/WeatherTile/CurrentTile";
import {
  selectDoneSearches,
  setSearch,
} from "../../components/Search/searchSlice";
import {
  addContentHidden,
  clearState,
  selectForecastData,
  selectGeoAgreement,
  selectGeoCoordinates,
  selectHourlyWeatherData,
  selectIsForecast,
  selectWeatherData,
  setGeoAgreement,
  setGeoCoordinates,
  setIsForecast,
  setWeatherData,
} from "../weatherSlice";
import Error from "../../components/StatusInfo/Error";
import WeatherApp from "../index";
import Button from "../../components/Button";
import ForecastTile from "../../components/WeatherTile/ForecastTile";
import Section from "../../components/Section";

const CurrentPositionWeather = () => {
  const dispatch = useDispatch();

  const geoAgreement = useSelector(selectGeoAgreement);
  const geoCoordinates = useSelector(selectGeoCoordinates);
  const weatherData = useSelector(selectWeatherData);
  const forecastData = useSelector(selectForecastData);
  const hourlyWeatherData = useSelector(selectHourlyWeatherData);
  const doneSearches = useSelector(selectDoneSearches);
  const isForecast = useSelector(selectIsForecast);

  useEffect(() => {
    const requestGeolocationPermission = () => {
      navigator.geolocation.getCurrentPosition(
        () => {
          dispatch(setGeoAgreement(true));
        },
        () => {
          dispatch(setGeoAgreement(false));
        }
      );
    };

    if (!geoAgreement) {
      requestGeolocationPermission();
    } else {
      dispatch(clearState());
      navigator.geolocation.getCurrentPosition((position) =>
        dispatch(
          setGeoCoordinates({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          })
        )
      );
    }
  }, [geoAgreement, dispatch]);

  const { data, isLoading, isError } = useQuery(
    ["currentPositionWeather", { geoCoordinates }],
    () => {
      if (!!geoCoordinates) {
        const stringifyCoordinates = `${geoCoordinates.lat.toString()},${geoCoordinates.lon.toString()}`;
        return getCurrentData(stringifyCoordinates, 3);
      }
    }
  );

  useEffect(() => {
    if (!!data) {
      dispatch(setWeatherData(data));
      dispatch(addContentHidden());
    }
  }, [data, dispatch]);

  if (doneSearches.length > 0 && geoAgreement === false) {
    dispatch(setSearch(doneSearches[0]));
    return <Navigate to={`/weather/${doneSearches[0].name}`} />;
  }

  return (
    <>
      <WeatherApp current="true">
        {isLoading && <LoaderIcon />}
        {isError && <Error />}
        {!!weatherData && !isLoading && (
          <CurrentTile
            data={weatherData}
            hourlyData={hourlyWeatherData}
            savedInFav="true"
          />
        )}
        {geoAgreement === false && <h3>Enter city name for weather</h3>}
      </WeatherApp>
      {!!weatherData && (
        <Section forecastSection activeSection={isForecast}>
          <Button
            name={"Forecast"}
            forecast="true"
            iconDown={isForecast}
            handleOnClick={() => dispatch(setIsForecast(!isForecast))}
          />
          <ForecastTile
            data={weatherData}
            forecastData={forecastData}
            savedInFav="true"
          />
        </Section>
      )}
    </>
  );
};

export default CurrentPositionWeather;
