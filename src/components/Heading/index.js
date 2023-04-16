import { AdditionalTitleContent, HeadingWrapper, Logo, Title } from "./styled";

const Heading = ({ mainScreen }) => (
  <HeadingWrapper mainscreen={mainScreen}>
    <Title mainscreen={mainScreen}>
      What's the
      <AdditionalTitleContent mainscreen={mainScreen}>
        Weather
      </AdditionalTitleContent>
    </Title>
    <Logo mainscreen={mainScreen} />
  </HeadingWrapper>
);

export default Heading;
