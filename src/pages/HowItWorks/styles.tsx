import styled from "styled-components";
import colors from "styles/colors";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ActionIcon = styled.div<{ imageRight?: boolean }>`
  position: absolute;
  display: flex;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: ${colors.purpleLiner};
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  top: -40px;
  ${(props) => (props.imageRight ? "left" : "right")}: -40px;
`;

export const ActionWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

export const TextWrapper = styled.div`
  z-index: 2;
`;

export const PanelWrapper = styled.div`
  margin-top: 120px;
`;
