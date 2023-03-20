import React from "react";
import Search from "../Search";
import {
  DateComponentWrapper,
  DateInfo,
  DateTitle,
  DateWrapper,
} from "./styled";

const DateComponent = () => {
  const timestamp = new Date();
  const day = new Intl.DateTimeFormat("en", { weekday: "long" }).format(
    timestamp
  );
  const fullDateFormat = timestamp.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const fullDate = fullDateFormat.split("/").reverse().join("-");

  return (
    <DateComponentWrapper>
      <DateWrapper>
        <DateTitle>Today is</DateTitle>
        <DateInfo>{day}</DateInfo>
        <DateInfo additional>{fullDate}</DateInfo>
      </DateWrapper>
      <Search />
    </DateComponentWrapper>
  );
};

export default DateComponent;
