import Header from "../../components/Header";
import Main from "../../components/Main";
import Section from "../../components/Section";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSearchValues,
  setSearch,
} from "../../components/Search/searchSlice";
import { getForecastData } from "./getForecastData";
import { useLocation } from "react-router";
import { toForecast } from "../../core/routes";
import React, { useEffect } from "react";
import { setCity } from "./forecastSlice";
import DateComponent from "../../components/DateComponent";

const Forecast = () => {
  const location = useLocation();
  const searchValues = useSelector(selectSearchValues);
  const dispatch = useDispatch();

  const forecastData = useQuery(["forecastData", { searchValues }], () => {
    if (!!searchValues && location.pathname === toForecast) {
      const stringifyCoordinates = `${searchValues.lat.toString()},${searchValues.lon.toString()}`;
      return getForecastData(stringifyCoordinates);
    }
  });

  useEffect(() => {
    if (!!forecastData.data) {
      dispatch(setCity(forecastData.data));
      dispatch(setSearch(null));
    }
  }, [dispatch, searchValues, forecastData]);

  return (
    <>
      <Header />
      <Main>
        <DateComponent />
        <Section></Section>
      </Main>
    </>
  );
};

export default Forecast;
