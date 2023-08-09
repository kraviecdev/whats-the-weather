import { StatusInfo, StatusInfoWrapper, StatusWrapper } from "../styled";
import { ErrorButton, ErrorIcon } from "./styled";

const Error = () => {
  return (
    <StatusWrapper>
      <ErrorIcon />
      <StatusInfoWrapper>
        <div>
          <StatusInfo contrast="true">Error!</StatusInfo>
          <StatusInfo>Something went wrong. Try again later.</StatusInfo>
        </div>
        <ErrorButton to={"/"}>Main page</ErrorButton>
      </StatusInfoWrapper>
    </StatusWrapper>
  );
};

export default Error;
