import React from "react";
import { DateWrapper, DateInfo } from "./styled";

const DateComponent = ({ localtime }) => {
  const day = new Intl.DateTimeFormat("en", { weekday: "long" }).format(
    localtime
  );
  const fullDateFormat = new Date(localtime).toLocaleDateString("pl", {
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <DateWrapper>
      <DateInfo>
        <b>{day}</b>, {fullDateFormat}
      </DateInfo>
    </DateWrapper>
  );
};

export default DateComponent;
