import styled, { css } from "styled-components";

const Section = styled.section`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  ${({ forecastSection }) =>
    forecastSection &&
    css`
      justify-content: flex-start;
      height: 100%;
      gap: 12px;
      transform: translateY(-51px);
      background: ${({ theme }) => theme.colors.mainColor};
      transition: 0.7s ease-in-out;

      ${({ activeSection }) =>
        activeSection &&
        css`
          transform: translateY(-100dvh);
        `}
    `}
`;

export default Section;
