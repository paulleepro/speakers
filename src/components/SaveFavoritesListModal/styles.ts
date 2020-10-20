import styled from "styled-components";
import colors from "styles/colors";

export const ModalHeader = styled.h3`
  font-family: Montserrat;
  font-size: 32px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.26px;
  color: ${colors.white};
  padding: 40px 0;
  margin: 0;
`;

export const ModalContent = styled.div`
  border-top: 1px solid ${colors.purpleLiner};
  border-bottom: 1px solid ${colors.purpleLiner};
  padding: 24px 0;
  width: 100%;
  margin: 0 auto;
`;

export const ModalFooter = styled.div`
  padding: 40px 0 24px;
  text-align: right;
`;

export const Input = styled.input`
  background-color: ${colors.black};
  border: 1px solid ${colors.purpleLiner};
  border-radius: 12px;
  outline: none;
  padding: 15px 45px 17px 24px;
  margin-bottom: 36px;
  width: 100%;

  font-size: 24px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.3px;
  color: ${colors.white};

  &::placeholder {
    color: ${colors.midGrey};
  }
`;

export const Label = styled.div`
  font-family: Montserrat;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0.2px;
  color: ${colors.white};
  margin-bottom: 8px;
`;

export const LabelDescription = styled.div`
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: ${colors.midGrey};
  margin-bottom: 24px;
`;
