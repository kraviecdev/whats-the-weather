import { ButtonLink, UpIcon } from "./styled";

const Button = ({ handleOnClick, name, forecast, forecastBack }) => {
  return (
    <ButtonLink
      onClick={handleOnClick}
      forecast={forecast}
      forecastBack={forecastBack}
    >
      {name} <UpIcon />
    </ButtonLink>
  );
};

export default Button;
