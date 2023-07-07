import { ReactComponent as VectorUp } from "./up.svg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ButtonLink = styled(NavLink)`
  padding: 12px 32px;
  border-radius: 16px;
  text-decoration: none;
  text-align: center;
  font-weight: 700;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.colors.mainFont};
  background: ${({ theme }) => theme.colors.secondaryColor};
  max-width: max-content;
`;
export const UpIcon = styled(VectorUp)`
  width: 44px;
  fill: ${({ theme }) => theme.colors.mainFont};
`;
