import styled, { keyframes } from "styled-components";
import loader from "./loader.png";

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
export const LoaderIcon = styled.div`
  width: 64px;
  height: 64px;
  background-size: contain;
  background-image: url(${loader});
  animation: ${rotation} 2s linear infinite;
`;
