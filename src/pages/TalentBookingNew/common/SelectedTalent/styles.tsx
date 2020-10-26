import styled from "styled-components";
import colors from "styles/colors";

export const Wrapper = styled.div<{ variant?: string }>`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.3px;
  color: ${colors.white};
  border-radius: 12px;
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.25);
  border: solid 1px
    ${(props) =>
      props.variant === "outline" ? colors.primaryPurple : colors.purpleLiner};
  background-color: ${(props) =>
    props.variant === "outline" ? "transparent" : colors.primaryPurple};
  padding: 16px 74px 16px 24px;
  position: relative;
  margin-bottom: 16px;

  button {
    position: absolute;
    right: 24px;
    top: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    height: fit-content;
    background-color: transparent;
  }

  @media (max-width: 767px) {
    font-size: 18px;
    line-height: 2;
    letter-spacing: 0.23px;
    margin-bottom: 8px;
  }
`;
