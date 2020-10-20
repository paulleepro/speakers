import styled from "styled-components";
import colors from "styles/colors";

export const EventTypeWrapper = styled.div`
  max-width: 334px;
`;

export const ImageWrapper = styled.div<{ active?: boolean }>`
  width: 100%;
  height: 200px;
  position: relative;
  border-radius: 12px;
  margin-bottom: 8px;
  overflow: hidden;
  border: solid
    ${(props) =>
      props.active
        ? `4px ${colors.primaryPurple}`
        : `1px ${colors.purpleLiner}`};

  img {
    width: 100%;
  }

  h4 {
    position: absolute;
    bottom: 16px;
    left: 14px;
    font-size: 24px;
    line-height: 1.5;
    letter-spacing: 0.3px;
    color: ${colors.white};
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;

    p {
      border-radius: 50%;
      margin: 0 14px 0 0;
      width: 28px;
      height: 28px;
      border: solid
        ${(props) =>
          props.active ? `6px ${colors.white}` : `2px ${colors.primaryPurple}`};
      background-color: ${(props) =>
        props.active ? colors.primaryPurple : "#1a191e"};
    }
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.99) 85%
  );
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.25);
`;

export const FeaturesList = styled.ul<{ active?: boolean }>`
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: ${(props) => (props.active ? colors.white : colors.midGrey)};
  margin-bottom: 32px;
`;
