import { StatusWrapper } from "../styled";
import { ErrorIcon, ErrorInfo, ErrorInfoWrapper } from "./styled";
import Button from "../../Button";

const Error = () => {
  return (
    <StatusWrapper>
      <ErrorIcon />
      <ErrorInfoWrapper>
        <ErrorInfo contrast="true">Error!</ErrorInfo>
        <ErrorInfo>Something went wrong. Try again later.</ErrorInfo>
      </ErrorInfoWrapper>
      <Button name={"Try again"} path={"/"} />
    </StatusWrapper>
  );
};

export default Error;
