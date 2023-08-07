import { ButtonLink, UpIcon } from "./styled";

const Button = ({ handleOnClick, name, iconDown, articleButton }) => {
  return (
    <ButtonLink
      onClick={handleOnClick}
      iconDown={iconDown}
      articleButton={articleButton}
    >
      {name} <UpIcon />
    </ButtonLink>
  );
};

export default Button;
