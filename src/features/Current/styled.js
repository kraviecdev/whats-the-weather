import styled from "styled-components";
import { Add } from "@styled-icons/fluentui-system-filled/Add";

export const RealTimeWrapper = styled.div`
  max-width: 470px;
  width: 100%;
  min-height: 300px;
  border: 10px solid ${({ theme }) => theme.colors.secondaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.mainColor};
  transition: 0.7s ease-out;

  &:hover {
    border: 10px solid ${({ theme }) => theme.colors.secondaryFont};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-grow: 0;
    min-height: 200px;
  }
`;

export const RealTimeAddButton = styled.button`
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  width: 100%;
`;

export const ButtonIcon = styled(Add)`
  width: 48px;
  color: ${({ theme }) => theme.colors.secondaryFont};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 36px;
  }
`;

export const RealTimeInfo = styled.p`
  margin: 12px 0;
  color: ${({ theme }) => theme.colors.mainFont};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 14px;
  }
`;
