import { ReactComponent as Error } from "./sad_cloud.svg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const ErrorIcon = styled(Error)`
  fill: ${({ theme }) => theme.colors.secondaryFont};
  stroke: ${({ theme }) => theme.colors.secondaryFont};
  margin: 0 0 167px 0;
`;

export const ErrorButton = styled(NavLink)`
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 12px 32px;
  border-radius: 16px;
  text-decoration: none;
  font-weight: 700;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.colors.mainFont};
  background: ${({ theme }) => theme.colors.secondaryColor};
  width: max-content;
`;
