import styled from "styled-components";
import colors from "styles/colors";
import { Container } from "components/Grid";

export const Wrapper = styled(Container)`
  @media (max-width: 768px) {
    margin-top: 24px;
  }

  @media (max-width: 375px) {
    padding: 0;
  }
`;

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
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;

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
  padding-left: 48px;
  border-top: 1px solid ${colors.purpleLiner};

  @media (max-width: 1023px) {
    padding-left: 0;
  }

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

export const DropIcon = styled.span`
  display: flex;
  :before {
    width: 0;
    height: 0;
    border-top: 8px solid ${colors.primaryPurple};
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    content: "";
    font-size: 0px;
    vertical-align: middle;
    margin-left: 5px;
    line-height: 22px;
  }
`;

export const TooltipContent = styled.div`
  border-radius: 12px;
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.25);
  font-size: 16px;
  letter-spacing: 0.2px;
  line-height: 1.38;
`;

export const ScrollWrapper = styled.div`
  height: 100%;
  overflow: auto;
  border-radius: 12px;
`;
