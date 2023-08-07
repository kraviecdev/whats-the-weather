import { StatusWrapper } from "../styled";
import { LoaderIcon } from "./styled";
import Heading from "../../Heading";

const Loading = ({ start }) => (
  <StatusWrapper>
    {start && <Heading />}
    <LoaderIcon />
  </StatusWrapper>
);

export default Loading;
