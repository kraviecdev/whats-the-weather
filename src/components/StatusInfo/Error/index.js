import { StatusWrapper } from "../styled";
import { ErrorIcon, ErrorInfo, ErrorInfoWrapper } from "./styled";
import Button from "../../Button";

const Error = () => {
  return (
    <StatusWrapper>
      <ErrorIcon />
      <ErrorInfoWrapper>
        <div>
          <ErrorInfo contrast="true">Error!</ErrorInfo>
          <ErrorInfo>Something went wrong. Try again later.</ErrorInfo>
        </div>
        <Button name={"Try again"} path={"/"} />
      </ErrorInfoWrapper>
    </StatusWrapper>
  );
};

export default Error;
