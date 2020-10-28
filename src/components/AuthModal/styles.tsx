import styled from "styled-components";
import colors from "styles/colors";

export const ModalHeaderWrapper = styled.div`
  height: 104px;
  display: flex;
  align-items: center;
`;

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
  padding: 32px 0;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: ${colors.midGrey};
  text-align: center;
`;

export const TextButton = styled.button`
  color: ${colors.primaryPurple};
  border: none;
  outline: none;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
`;

export const FormTitle = styled.div`
  text-align: center;
  letter-spacing: 0.2px;
  margin-bottom: 40px;

  h4 {
    font-family: Montserrat;
    font-size: 24px;
    color: ${colors.white};
    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.2px;
    color: ${colors.midGrey};
    margin: 0;
  }
`;

export const FormWrapper = styled.form`
  max-width: 471px;
  width: 100%;
  margin: 0 auto;
`;

export const Input = styled.input`
  background-color: ${colors.black};
  border: 1px solid ${colors.purpleLiner};
  border-radius: 12px;
  outline: none;
  padding: 15px 45px 17px 24px;
  margin: 8px 0 16px;
  width: 100%;

  font-size: 24px;
  line-height: 1.5;
  letter-spacing: 0.3px;
  color: ${colors.white};

  &::placeholder {
    color: ${colors.midGrey};
  }
`;

export const Label = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: ${colors.white};
`;

export const FormControl = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

export const Checkbox = styled.label`
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: ${colors.midGrey};
  margin: auto 0;

  span {
    margin-left: 12px;
  }

  a {
    color: ${colors.primaryPurple};
  }
`;
