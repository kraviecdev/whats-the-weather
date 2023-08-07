import { StatusWrapper } from "../styled";
import { ErrorButton, ErrorIcon, ErrorInfo, ErrorInfoWrapper } from "./styled";

const Error = () => {
  return (
    <StatusWrapper>
      <ErrorIcon />
      <ErrorInfoWrapper>
        <div>
          <ErrorInfo contrast="true">Error!</ErrorInfo>
          <ErrorInfo>Something went wrong. Try again later.</ErrorInfo>
        </div>
        <ErrorButton to={"/"}>Main page</ErrorButton>
      </ErrorInfoWrapper>
    </StatusWrapper>
  );
};

export default Error;
