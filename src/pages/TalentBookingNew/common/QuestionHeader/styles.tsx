import styled from "styled-components";
import colors from "styles/colors";

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
  min-width: 32px;
  max-width: 32px;
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
