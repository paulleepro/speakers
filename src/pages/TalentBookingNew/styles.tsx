import styled from "styled-components";
import colors from "styles/colors";

export const StepperContainer = styled.div`
  border-radius: 12px;
  background-color: ${colors.purpleBgFill};
  padding: 12px 32px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Step = styled.span<{ active?: boolean; completed?: boolean }>`
  border-radius: 12px;
  border: solid 1px ${colors.purpleLiner};
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.2px;
  text-align: center;
  font-weight: ${(props) => (props.active ? 600 : "normal")};
  color: ${(props) => (props.active ? colors.white : colors.midGrey)};

  background-color: ${(props) =>
    props.active ? colors.primaryPurple : "transparent"};
  border-color: ${(props) =>
    props.active ? colors.primaryPurple : colors.purpleLiner}};
  padding: 6px 20px;
  position: relative;
`;

export const StepLine = styled.div<{ active?: boolean }>`
  height: 2px;
  background-color: ${(props) =>
    props.active ? colors.primaryPurple : colors.midGrey};
`;

export const StepWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
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
  margin-bottom: 8px;
`;

export const QuestionDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: ${colors.white};
  margin-bottom: 40px;
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
`;

export const QuestionWrapper = styled.div`
  margin-top: 68px;
`;
