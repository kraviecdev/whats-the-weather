import { ButtonLink, UpIcon } from "./styled";
import { useLocation } from "react-router";

const Button = ({ handleOnClick, path, name, forecast }) => {
  const location = useLocation();

  return (
    <ButtonLink
      to={path}
      onClick={handleOnClick}
      forecast={forecast}
      forecastBack={location.pathname.split("/")[1] === "forecast"}
    >
      {name} <UpIcon />
    </ButtonLink>
  );
};

export default Button;
