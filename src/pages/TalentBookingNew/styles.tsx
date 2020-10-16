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

export const QuestionTitle = styled.h4`
  font-family: Montserrat;
  font-size: 24px;
  letter-spacing: 0.2px;
  color: ${colors.white};
  margin: 0;
`;

export const QuestionDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: ${colors.white};
  margin-bottom: 40px;
  margin-left: 48px;
`;

export const QuestionBullet = styled.div`
  width: 32px;
  height: 32px;
  border: solid 1px ${colors.purpleLiner};
  background-color: ${colors.black};
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.2px;
  text-align: center;
  color: ${colors.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`;

export const QuestionWrapper = styled.div`
  margin-top: 68px;
`;
