import { StatusWrapper } from "../styled";
import { LoaderIcon } from "./styled";
import Heading from "../../Heading";

const Loading = () => (
  <StatusWrapper>
    <Heading mainscreen="false" />
    <LoaderIcon />
  </StatusWrapper>
);

export default Loading;
