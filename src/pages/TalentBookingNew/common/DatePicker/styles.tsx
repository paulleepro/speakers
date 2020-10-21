import styled from "styled-components";
import colors from "styles/colors";

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;

  .react-datepicker-wrapper {
    width: 100%;
  }

  .date-picker {
    width: 100%;
    border: solid 1px ${colors.purpleLiner};
    background-color: ${colors.black};
    border-radius: 12px;
    outline: none;
    cursor: pointer;
    padding: 15px 56px 17px 24px;

    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 0.3px;
    color: ${colors.white};

    @media (max-width: 767px) {
      font-size: 18px;
      line-height: 2;
      letter-spacing: 0.23px;
    }
  }
`;
