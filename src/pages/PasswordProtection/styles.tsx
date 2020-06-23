import styled from "styled-components";
import colors from "styles/colors";
import { Box } from "react-basic-blocks";

export const Input = styled.input`
  background-color: #000;
  border: 1px solid ${colors.midGrey};
  border-radius: 12px;
  outline: none;
  padding: 14px 45px 14px 24px;
  width: 100%;
  margin: 20px 0 0 0;

  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: ${colors.midGrey};

  &::placeholder {
    color: ${colors.midGrey};
  }
`;

export const Wrapper = styled.div`
  @media (min-width: 767px) {
    padding-top: 100px;
  }
`;

export const TopSemi = styled.div`
  z-index: -2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 422px;
  object-fit: contain;
  background-image: linear-gradient(
    to bottom,
    rgba(34, 30, 41, 0),
    ${colors.purpleBgFill}
  );
  height: 360px;
  border-radius: 0 0 300px 0;
`;

export const FormBox = styled(Box)`
  border: 1px solid ${colors.purpleLiner};
  padding: 150px 110px;
  background-color: #000;

  @media (max-width: 767px) {
    border: none;
    padding: 150px 16px;
    background-color: transparent;
  }
`;

export const InstructionText = styled.span`
  margin: 15px 0 0 0;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.3px;
  text-align: center;

  @media (max-width: 767px) {
    margin: 175px 0 0 0;
  }
`;

export const CirclesWrapper = styled.div`
  position: absolute;
  top: -500px;
  right: -500px;
  width: 1000px;
  height: 1000px;
  z-index: -1;
`;
