import { AdditionalTitleContent, HeadingWrapper, Logo, Title } from "./styled";

const Heading = ({ main }) => (
  <HeadingWrapper main={main}>
    <Title>
      What's the
      <AdditionalTitleContent>Weather</AdditionalTitleContent>
    </Title>
    <Logo />
  </HeadingWrapper>
);

export default Heading;
