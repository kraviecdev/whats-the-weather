import styled, { css } from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  max-width: 100%;

  ${({ rowGap }) =>
    rowGap &&
    css`
      flex-direction: row;
      gap: 8px;
    `}

  ${({ forecastSection }) =>
    forecastSection &&
    css`
      height: 100%;
      width: 100%;
      z-index: 999;
      position: fixed;
      left: 0;
      top: 0;
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

  ${({ tileView }) =>
    tileView &&
    css`
      overflow-y: scroll;
      padding: 16px;
      gap: 8px;
    `}

  ${({ citiesSection }) =>
    citiesSection &&
    css`
      margin: 0 -16px;
      max-width: unset;
    `}
`;

export default Section;
