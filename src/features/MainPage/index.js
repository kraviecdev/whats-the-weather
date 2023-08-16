import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getSearchData } from "../../components/Search/getSearchData";
import {
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
import WeatherApp from "../index";
import Loading from "../../components/StatusInfo/Loading";
import Error from "../../components/StatusInfo/Error";
import Info from "../../components/StatusInfo/Info";

const MainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const applicationStatus = useSelector(selectApplicationStatus);
  const geoAgreement = useSelector(selectGeoAgreement);
  const geoCoordinates = useSelector(selectGeoCoordinates);
  const searchValues = useSelector(selectSearchValues);
  const doneSearches = useSelector(selectDoneSearches);

  useEffect(() => {
    if (!geoAgreement) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          dispatch(setGeoAgreement(true));
          dispatch(
            setGeoCoordinates({
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            })
          );
        },
        () => dispatch(setGeoAgreement(false))
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        fav: true,
        location: true,
      };

      dispatch(setSearch(searchValues));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [geoAgreement]);

  const Status = () =>
    ({
      loading: <Loading />,
      error: <Error />,
      info: <Info />,
    }[applicationStatus]);

  return (
    <WeatherApp>
      <Status />
    </WeatherApp>
  );
};

export default MainPage;
