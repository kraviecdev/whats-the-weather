import WeatherApp from "../index";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearState,
  selectApplicationStatus,
  selectGeoAgreement,
  selectGeoCoordinates,
  setApplicationStatus,
  setGeoAgreement,
  setGeoCoordinates,
} from "../weatherSlice";
import {
  selectDoneSearches,
  selectSearchValues,
  setLocationSearch,
  setSearch,
} from "../../components/Search/searchSlice";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getSearchData } from "../../components/Search/getSearchData";
import Section from "../../components/Section";
import Loading from "../../components/StatusInfo/Loading";
import Error from "../../components/StatusInfo/Error";

const MainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const applicationStatus = useSelector(selectApplicationStatus);
  const geoAgreement = useSelector(selectGeoAgreement);
  const geoCoordinates = useSelector(selectGeoCoordinates);
  const searchValues = useSelector(selectSearchValues);
  const doneSearches = useSelector(selectDoneSearches);

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
  }, [geoAgreement]);

  const { data } = useQuery(["currentPositionCity", { geoCoordinates }], () => {
    if (!!geoCoordinates) {
      const stringifyCoordinates = `${geoCoordinates.lat.toString()},${geoCoordinates.lon.toString()}`;
      return getSearchData(stringifyCoordinates);
    }
  });

  useEffect(() => {
    if (!!data) {
      const searchValues = {
        id: data[0].id,
        name: data[0].name,
        lat: data[0].lat,
        lon: data[0].lon,
        fav: false,
        location: true,
      };

      dispatch(setSearch(searchValues));
    }
  }, [data]);

  useEffect(() => {
    if (!!searchValues) {
      if (doneSearches.length > 0) {
        const isSaved = doneSearches.some(({ id }) => id === searchValues.id);

        if (!!isSaved) {
          const savedCity = doneSearches.find(
            ({ id }) => id === searchValues.id
          );
          dispatch(setSearch(savedCity));
          navigate(`/weather/${savedCity.name}`);
        }
      } else {
        dispatch(setLocationSearch(searchValues));
        navigate(`/weather/${searchValues.name}`);
      }
    }
  }, [searchValues]);

  useEffect(() => {
    if (geoAgreement === false) {
      if (doneSearches.length === 0) {
        dispatch(setApplicationStatus("info"));
      } else {
        dispatch(setSearch(doneSearches[0]));
        navigate(`/weather/${doneSearches[0].name}`);
      }
    }
  }, [geoAgreement]);

  const Status = () =>
    ({
      loading: <Loading />,
      error: <Error />,
      info: <h3>Enter city name for weather</h3>,
    }[applicationStatus]);

  return (
    <WeatherApp current="true">
      <Section>
        <Status />
      </Section>
    </WeatherApp>
  );
};

export default MainPage;
