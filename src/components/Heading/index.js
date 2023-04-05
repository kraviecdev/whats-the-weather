import { AdditionalTitleContent, HeadingWrapper, Logo, Title } from "./styled";

const Heading = ({ mainScreen }) => (
  <HeadingWrapper mainScreen={mainScreen}>
    <Title mainScreen={mainScreen}>
      What's the
      <AdditionalTitleContent mainScreen={mainScreen}>
        Weather
      </AdditionalTitleContent>
    </Title>
    <Logo mainScreen={mainScreen} />
  </HeadingWrapper>
);

export default Heading;
