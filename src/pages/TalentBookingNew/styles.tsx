import styled from "styled-components";
import colors from "styles/colors";

export const BookingSummaryContainer = styled.div`
  h3 {
    font-size: 24px;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: 0.3px;
    color: ${colors.midGrey};
    margin-bottom: 32px;
  }

  hr {
    border: none;
    height: 1px;
    background-color: ${colors.purpleLiner};
    margin-bottom: 32px;
  }
`;

export const FormContainer = styled.div`
  border-radius: 12px;
  background-color: ${colors.purpleBgFill};
  padding: 0 40px;

  h3 {
    font-family: Montserrat;
    font-size: 32px;
    letter-spacing: 0.26px;
    color: ${colors.white};
    padding: 40px 0;
    border-bottom: 1px solid ${colors.purpleLiner};
    margin: 0;
  }

  @media (max-width: 768px) {
    padding: 0 16px;

    h3 {
      text-align: center;
      padding: 24px 0;
    }
  }
`;

export const FormFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  margin-top: 44px;
  border-top: 1px solid ${colors.purpleLiner};

  a {
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: 0.2px;
    text-align: center;
    color: ${colors.white};
  }
`;

export const BackButton = styled.button`
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.2px;
  text-align: center;
  color: #ffffff;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  :before {
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-right: 8px solid #ffffff;
    content: "";
    font-size: 0px;
    vertical-align: middle;
    margin-right: 10px;
  }
`;
