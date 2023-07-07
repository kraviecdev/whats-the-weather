import { ButtonLink, UpIcon } from "./styled";

const Button = ({ handleOnClick, path, name, forecast }) => {
  return (
    <ButtonLink to={path} onClick={handleOnClick} forecast={forecast}>
      {name} <UpIcon />
    </ButtonLink>
  );
};

export default Button;
