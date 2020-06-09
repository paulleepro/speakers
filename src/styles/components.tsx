import styled from "styled-components";
import colors from "styles/colors";
import { Box } from "react-basic-blocks";
import { Row, RowProps, Col, ColProps } from "react-grid-system";

export const SectionWrapper = styled(Box)`
  max-width: 1160px;
  width: 100%;
`;

export const VirtualText = styled.span<{ margin?: string }>`
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.78;
  letter-spacing: 2px;
  padding-left: 13px;
  border-left: 4px solid ${colors.primaryPurple};
  display: block;
  margin: ${(props) => props.margin || "0px"};
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

export const Divider = styled.div<{ width: string }>`
  background-color: ${colors.primaryPurple};
  height: 2px;
  width: ${(props) => props.width};
  margin: 30px 0;
`;

export const StyledImage = styled.img<{ borderRadius?: string }>`
  transition: all 0.3s ease-in-out;
  width: 100%;
  object-position: 50% 50%;
  object-fit: cover;
  ${(props) =>
    props.borderRadius ? `border-radius: ${props.borderRadius};` : ""}
`;

export const Button = styled.button<{ margin?: string }>`
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  width: fit-content;
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
`;

export const StyledRow = styled(Row)<RowProps & { margin: string }>`
  margin: ${(props) => props.margin};
`;

export const StyledCol = styled(Col)<ColProps & { margin: string }>`
  margin: ${(props) => props.margin};
`;
