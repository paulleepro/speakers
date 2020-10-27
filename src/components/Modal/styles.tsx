import styled from "styled-components";
import { Modal } from "react-overlays";
import colors from "styles/colors";

export const Backdrop = styled("div")`
  position: fixed;
  z-index: 1040;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  opacity: 0.5;
`;

export const PositionedModal = styled(Modal)`
  position: fixed;
  max-width: 719px;
  width: 100%;
  height: fit-content;
  z-index: 1040;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: none;
  outline: none;
  border-radius: 12px;
  background-color: ${colors.purpleBgFill};
  padding: 0 40px;

  @media (max-width: 768px) {
    bottom: auto;
    padding: 0 16px;
    border-radius: 0;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
  background: transparent;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;
`;
