import Section from "../../components/Section";
import Search from "../../components/Search";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDoneSearches,
  setSearch,
} from "../../components/Search/searchSlice";
import React from "react";
import { Navigate } from "react-router-dom";

const FirstScreen = () => {
  const doneSearches = useSelector(selectDoneSearches);
  const dispatch = useDispatch();

  if (doneSearches.length > 0) {
    dispatch(setSearch(doneSearches[0]));
    return <Navigate to={`/weather/${doneSearches[0].name}`} />;
  }

  return (
    <>
      <Search />
      <Section>
        <h3>Search your first City</h3>
      </Section>
    </>
  );
};

export default FirstScreen;
