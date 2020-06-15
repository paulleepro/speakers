import styled from "styled-components";
import colors from "styles/colors";
import { Box } from "react-basic-blocks";
import { Row, RowProps, Col, ColProps } from "react-grid-system";

export const SectionWrapper = styled(Box)`
  max-width: 1160px;
  width: 100%;
`;

export const VirtualText = styled.span<{
  margin?: string;
  noCenterAlign?: boolean;
}>`
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.78;
  letter-spacing: 2px;
  padding-left: 13px;
  display: block;
  margin: ${(props) => props.margin || "0px"};

  ::before {
    width: 0;
    height: 0;
    border-right: 3px solid ${colors.primaryPurple};
    border-top: 8px solid ${colors.primaryPurple};
    border-bottom: 6px solid ${colors.primaryPurple};
    content: "";
    font-size: 0px;
    vertical-align: middle;
    margin-right: 10px;
  }

  @media (max-width: 1024px) {
    text-align: ${(props) => (props.noCenterAlign ? "left" : "center")};
  }
`;

export const ArrowLeftText = styled.span<{
  margin?: string;
  noCenterAlign?: boolean;
}>`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.78;
  letter-spacing: 2px;
  padding-left: 0px;
  display: block;
  margin: ${(props) => props.margin || "0px"};

  ::before {
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid ${colors.primaryPurple};
    content: "";
    font-size: 0px;
    vertical-align: middle;
    margin-right: 10px;
  }

  @media (max-width: 1024px) {
    text-align: ${(props) => (props.noCenterAlign ? "left" : "center")};
  }
`;

export const BigText = styled.span<{ margin?: string; color?: string }>`
  margin: ${(props) => props.margin || "35px 0"};
  color: ${(props) => props.color || "#FFF"};
  font-family: Montserrat;
  font-size: 96px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.08;
  letter-spacing: 0.79px;
  display: block;

  u {
    text-decoration-color: ${colors.primaryPurple};
  }

  @media (max-width: 1024px) {
    font-size: 44px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.18;
    letter-spacing: 0.66px;
    text-align: center;
  }
`;

export const DescriptionText = styled.span<{
  color?: string;
  weight?: string;
  maxWidth?: string;
  textAlign?: string;
  margin?: string;
  noCenterAlign?: boolean;
}>`
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  font-size: 24px;
  font-weight: ${(props) => props.weight || "normal"};
  color: ${(props) => props.color || "#FFF"};
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.3px;
  ${(props) => (props.maxWidth ? `max-width: ${props.maxWidth};` : "")}
  ${(props) =>
    props.textAlign ? `text-align: ${props.textAlign};` : ""}
  display: block;

  @media (max-width: 1024px) {
    text-align: ${(props) => (props.noCenterAlign ? "left" : "center")};
  }
`;

export const HeaderText = styled.span<{ noCenterAlign?: boolean }>`
  font-family: Montserrat;
  font-size: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.33px;
  margin-bottom: 25px;
  display: block;
  color: #ffffff;

  @media (max-width: 1024px) {
    text-align: ${(props) => (props.noCenterAlign ? "left" : "center")};
  }
`;

export const Divider = styled.div<{ width: string; noCenterAlign?: boolean }>`
  background-color: ${colors.primaryPurple};
  height: 2px;
  width: ${(props) => props.width};
  margin: 30px 0;

  @media (max-width: 1024px) {
    align-self: ${(props) => (props.noCenterAlign ? "flex-start" : "center")};
  }
`;

export const Button = styled.button<{ margin?: string; width?: string }>`
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.width ? `width: ${props.width};` : "")}
  cursor: pointer;
  border-radius: 12px;
  background-color: ${colors.primaryPurple};
  padding: 10px 30px;
  font-size: 
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.2px;
  text-align: center;
  color: white;
  border: none;
  outline: none;

  &:disabled{
    background-color: ${colors.darkPurpleFill};
  }
`;

export const StyledRow = styled(Row)<RowProps & { margin: string }>`
  margin: ${(props) => props.margin};
`;

export const StyledCol = styled(Col)<ColProps & { margin: string }>`
  margin: ${(props) => props.margin};
`;

export const TopRightSemi = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  height: 360px;
  border-radius: 0 0 0 600px;
  border-bottom: 1px solid ${colors.purpleLiner};

  @media (max-width: 1024px) {
    width: 60%;
  }
`;
