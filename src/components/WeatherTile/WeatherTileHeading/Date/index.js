import React from "react";
import { DateWrapper, DateInfo } from "./styled";

const DateComponent = ({ localtime }) => {
  const timestamp = new Date(localtime);
  const day = new Intl.DateTimeFormat("en", { weekday: "long" }).format(
    timestamp
  );
  const fullDateFormat = timestamp.toLocaleDateString("pl", {
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
