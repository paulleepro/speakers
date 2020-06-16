import styled from "styled-components";
import colors from "styles/colors";

export const SidebarContainer = styled.div`
  position: relative;
  height: 100vh;
  padding: 60px 30px;
  box-shadow: 0 0px 8px 2px rgba(0, 0, 0, 0.3);
  position: fixed;
  z-index: 15;
  right: -100%;
  width: 100%;
  background-color: ${colors.darkPurpleFill};
  overflow-x: hidden;
  transition: right 0.5s;
  top: 0px;

  &.open {
    right: 0px;
  }

  @media only screen and (min-width: 1024px) {
    display: none;
  }
`;

export const CloseWrapper = styled.div`
  top: 16px;
  right: 16px;
  position: absolute;
  cursor: pointer;
`;
