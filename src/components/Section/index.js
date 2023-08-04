import styled, { css } from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  ${({ forecastSection }) =>
    forecastSection &&
    css`
      position: fixed;
      left: 0;
      top: 0;
      max-width: 100%;
      justify-content: flex-start;
      transform: translateY(calc(100dvh - 51px));
      gap: 12px;
      background: ${({ theme }) => theme.colors.mainColor};
      transition: 0.7s ease-in-out;

      ${({ activeSection }) =>
        activeSection &&
        css`
          transform: translateY(0);
        `}
    `}
`;

export default Section;
