import styled from "styled-components";
import colors from "styles/colors";

export const FocusItemWrapper = styled.div<{ active?: boolean }>`
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.25);
  border: solid 1px ${colors.purpleLiner};
  background-color: ${(props) =>
    props.active ? colors.primaryPurple : colors.black};
  padding: 15px 34px 17px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;

  p {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: solid
      ${(props) =>
        props.active ? `4px ${colors.white}` : `2px ${colors.primaryPurple}`};
    background-color: ${(props) =>
      props.active ? colors.primaryPurple : "#1a191e"};
    margin: 0 16px 0 0;
  }
  h4 {
    font-size: 24px;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: 0.3px;
    color: ${colors.white};
    margin: 0;
  }
`;
