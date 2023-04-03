import { StatusWrapper } from "../styled";
import { LoaderIcon } from "./styled";
import Heading from "../../Heading";

const Loading = () => (
  <StatusWrapper>
    <Heading />
    <LoaderIcon />
  </StatusWrapper>
);

export default Loading;