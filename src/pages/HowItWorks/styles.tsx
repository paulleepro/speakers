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

export const TopSemi = styled.div`
  z-index: -2;
  position: absolute;
  top: 0;
  left: 0;
  height: 700px;
  object-fit: contain;
  background-image: linear-gradient(
    to bottom,
    rgba(34, 30, 41, 0),
    ${colors.purpleBgFill}
  );
  border-radius: 0 0 600px 0;
  width: 50%;

  @media (max-width: 1023px) {
    width: 100%;
  }
`;
