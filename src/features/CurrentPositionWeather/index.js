import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getCurrentData } from "../getCurrentData";
import Section from "../../components/Section";
import Search from "../../components/Search";
import { LoaderIcon } from "../../components/StatusInfo/Loading/styled";
import WeatherTile from "../../components/WeatherTile";
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

  const { data, isLoading } = useQuery(
    ["currentPositionWeather", { geoCoordinates }],
    () => {
      if (!!geoCoordinates) {
        const stringifyCoordinates = `${geoCoordinates.lat.toString()},${geoCoordinates.lon.toString()}`;
        return getCurrentData(stringifyCoordinates, 2);
      }
    }
  );

  useEffect(() => {
    if (!!data) {
      dispatch(setWeatherData(data));
    }
  }, [data, dispatch]);

  if (geoAgreement === false && doneSearches.length > 0) {
    dispatch(setSearch(doneSearches[0]));
    return <Navigate to={`/weather/${doneSearches[0].name}`} />;
  }

  return (
    <>
      <Search />
      <Section>
        {isLoading && <LoaderIcon />}
        {!!weatherData && !isLoading && (
          <WeatherTile
            data={weatherData}
            hourlyData={hourlyWeatherData}
            isAddedToFav={true}
          />
        )}
        {geoAgreement === false && <h3>Enter city name for weather</h3>}
      </Section>
    </>
  );
};

export default CurrentPositionWeather;
