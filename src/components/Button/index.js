import { ButtonLink, UpIcon } from "./styled";

const Button = ({ handleOnClick, name, forecast, iconDown, articleButton }) => {
  return (
    <ButtonLink
      onClick={handleOnClick}
      forecast={forecast}
      iconDown={iconDown}
      articleButton={articleButton}
    >
      {name} <UpIcon />
    </ButtonLink>
  );
};

export default Button;
