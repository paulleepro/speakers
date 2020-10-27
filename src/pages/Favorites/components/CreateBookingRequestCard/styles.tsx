import styled from "styled-components";
import colors from "styles/colors";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 24px);
  border-radius: 20px;
  margin-top: 24px;
  background-color: ${colors.darkPurpleFill};
  padding: 24px;
  border: 1px solid ${colors.purpleLiner};

  @media (max-width: 767px) {
    height: 440px;
    padding: 30px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 440px;
`;

export const HeaderText = styled.div`
  font-family: Montserrat;
  font-size: 24px;
  font-weight: bold;
  line-height: normal;
  letter-spacing: 0.2px;
  text-align: center;
`;

export const MessageText = styled.div`
  font-size: 16px;
  text-align: center;
  color: ${colors.midGrey};
  letter-spacing: 0.2px;
  line-height: 1.5;
  margin: 32px 0;
`;
