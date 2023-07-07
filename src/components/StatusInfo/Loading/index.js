import { StatusWrapper } from "../styled";
import { LoaderIcon } from "./styled";
import Heading from "../../Heading";

const Loading = () => (
  <StatusWrapper>
    <Heading main={false} />
    <LoaderIcon />
  </StatusWrapper>
);

export default Loading;
