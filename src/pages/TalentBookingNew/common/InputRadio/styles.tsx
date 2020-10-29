import styled from "styled-components";
import colors from "styles/colors";

export const InputWrapper = styled.div<{ active?: boolean }>`
  border-radius: 12px;
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.25);
  border: solid 1px ${colors.purpleLiner};
  background-color: ${(props) =>
    props.active ? colors.primaryPurple : colors.black};
  padding: 15px 24px 17px 24px;
  margin-bottom: 16px;
  cursor: pointer;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: 0.1s all ease-in-out;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  label {
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 0.3px;
    color: ${colors.white};
    white-space: nowrap;
    padding-left: 40px;
    position: relative;
    cursor: pointer;
  }

  @media (max-width: 767px) {
    margin-bottom: 8px;

    label {
      font-size: 18px;
      line-height: 2;
      letter-spacing: 0.23px;
    }
  }

  &:hover {
    background-color: ${colors.secondaryPurple};

    span {
      border: solid 4px ${colors.white};
      background-color: ${colors.secondaryPurple};
    }
  }
`;

export const RadioButton = styled.span<{ checked?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  height: 24px;
  width: 24px;
  transition: 0.1s all ease-in-out;
  border: solid
    ${(props) =>
      props.checked ? `4px ${colors.white}` : `2px ${colors.primaryPurple}`};
  background-color: ${(props) =>
    props.checked ? colors.primaryPurple : "#1a191e"};
  border-radius: 50%;
`;
