import styled from "styled-components";
import { Box } from "react-basic-blocks";

export const Wrapper = styled(Box)`
  padding: 0 24px;
  position: sticky;
  top: 0;
  box-shadow: 0px 2px 6px -2px rgba(0, 0, 0, 0.7);
  height: 83px;
  z-index: 10;

  @media (max-width: 1024px) {
    height: 64px;
  }
`;

export const LinkText = styled.span`
  color: white;
  margin-left: 30px;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.2px;
`;

export const MenuContainer = styled.div`
  position: absolute;
  right: 16px;
`;
