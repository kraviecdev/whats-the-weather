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
  selectGeoAgreement,
  selectGeoCoordinates,
  selectHourlyWeatherData,
  selectWeatherData,
  setGeoAgreement,
  setGeoCoordinates,
  setWeatherData,
} from "../weatherSlice";
import Error from "../../components/StatusInfo/Error";
import WeatherApp from "../index";
import Button from "../../components/Button";

const CurrentPositionWeather = () => {
  const geoAgreement = useSelector(selectGeoAgreement);
  const geoCoordinates = useSelector(selectGeoCoordinates);
  const weatherData = useSelector(selectWeatherData);
  const hourlyWeatherData = useSelector(selectHourlyWeatherData);
  const doneSearches = useSelector(selectDoneSearches);
  const dispatch = useDispatch();

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
    }
  }, [data, dispatch]);

  if (doneSearches.length > 0 && geoAgreement === false) {
    dispatch(setSearch(doneSearches[0]));
    return <Navigate to={`/weather/${doneSearches[0].name}`} />;
  }

  return (
    <WeatherApp current="true">
      {isLoading && <LoaderIcon />}
      {isError && <Error />}
      {!!weatherData && !isLoading && (
        <>
          <CurrentTile
            data={weatherData}
            hourlyData={hourlyWeatherData}
            isAddedToFav="true"
          />
          <Button
            name={"Forecast"}
            forecast="true"
            path={`/forecast/${weatherData.location.name}`}
          />
        </>
      )}
      {geoAgreement === false && <h3>Enter city name for weather</h3>}
    </WeatherApp>
  );
};

export default CurrentPositionWeather;
