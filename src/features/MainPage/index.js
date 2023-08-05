import WeatherApp from "../index";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearState,
  selectGeoAgreement,
  selectGeoCoordinates,
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
import { LoaderIcon } from "../../components/StatusInfo/Loading/styled";

const MainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  }, [geoAgreement, dispatch]);

  const { data, isLoading, isError } = useQuery(
    ["currentPositionCity", { geoCoordinates }],
    () => {
      if (!!geoCoordinates) {
        const stringifyCoordinates = `${geoCoordinates.lat.toString()},${geoCoordinates.lon.toString()}`;
        return getSearchData(stringifyCoordinates);
      }
    }
  );

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
  });

  useEffect(() => {
    if (!!searchValues) {
      if (
        doneSearches.some((savedSearch) => savedSearch.id === searchValues.id)
      ) {
        const search = doneSearches.find(
          (savedSearch) => savedSearch.id === searchValues.id
        );

        dispatch(setSearch(search));
        navigate(`/weather/${search.name}`);
      } else {
        dispatch(setLocationSearch(searchValues));
        navigate(`/weather/${searchValues.name}`);
      }
    }
  }, [searchValues]);

  useEffect(() => {
    if (geoAgreement === false && doneSearches.length > 0) {
      dispatch(setSearch(doneSearches[0]));
      navigate(`/weather/${doneSearches[0].name}`);
    }
  }, [geoAgreement]);

  return (
    <WeatherApp current="true">
      <Section>
        {isLoading && <LoaderIcon />}
        {isError && <h3>Enter city name for weather</h3>}
      </Section>
    </WeatherApp>
  );
};

export default MainPage;
