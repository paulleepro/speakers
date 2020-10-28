import styled from "styled-components";
import colors from "styles/colors";
import { Box } from "react-basic-blocks";

export const Wrapper = styled(Box)`
  border-radius: 12px;
  background-color: ${colors.purpleBgFill};
  padding: 0 40px;

  @media (max-width: 1439px) {
    padding: 0 32px;
  }

  @media (max-width: 1023px) {
    padding: 0 24px;
  }

  @media (max-width: 767px) {
    padding: 0 16px;
  }
`;

export const EventName = styled.h3`
  font-family: Montserrat;
  font-size: 24px;
  letter-spacing: 0.2px;
  color: ${colors.white};
  margin-bottom: 8px;
`;

export const SummaryInfoBox = styled(Box)<{ bold?: boolean }>`
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: ${colors.white};
  margin-bottom: 4px;
  width: fit-content;
  ${(props) => (props.bold ? "font-weight: 600;" : "")}

  span,
  div {
    width: fit-content;
  }

  a {
    color: ${colors.primaryPurple};
  }

  span {
    color: ${colors.midGrey};
    margin-right: 3px;
  }
`;

export const Preference = styled.h6`
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: ${colors.midGrey};
  margin-bottom: 4px;
`;

export const Header = styled.h3`
  font-family: Montserrat;
  font-size: 32px;
  letter-spacing: 0.26px;
  color: ${colors.white};
  margin: 40px 0;

  @media (max-width: 1023px) {
    text-align: center;
    margin: 24px 0;
  }
`;

export const Content = styled(Box)`
  padding: 24px 0 40px 0;
  border-top: 1px solid ${colors.purpleLiner};
  border-bottom: 1px solid ${colors.purpleLiner};
`;

export const Footer = styled.div`
  text-align: right;
`;

export const SummaryWrapper = styled(Box)`
  border-radius: 12px;
  border: solid 1px ${colors.purpleLiner};
  background-color: ${colors.darkPurpleFill};
  margin-bottom: 46px;
  padding: 24px 0;

  display: flex;
  flex-direction: row;

  @media (max-width: 1023px) {
    flex-direction: column;
    padding: 24px 48px;
  }

  @media (max-width: 767px) {
    padding: 24px;
  }
`;

export const SummaryCol = styled.div<{ border?: boolean }>`
  padding: 0 24px 0 32px;
  flex: 1;

  ${(props) =>
    props.border ? `border-right: 1px solid ${colors.purpleLiner};` : ""}

  @media (max-width: 1023px) {
    padding: 0;
    border-right: none;
  }
`;

export const Border = styled.hr`
  height: 1px;
  border: none;
  background-color: ${colors.purpleLiner};
  margin: 24px 0;
`;

export const BulletWrapper = styled(Box)<{ isLast?: boolean }>`
  margin: ${(props) => (props.isLast ? "0 0 0 32px" : "0 0 40px 32px")};
  padding-left: 48px;
  position: relative;

  div:first-child {
    position: absolute;
    left: 0;
  }

  @media (max-width: 1023px) {
    margin: ${(props) => (props.isLast ? "0 0 0 0" : "0 0 32px 0")};
  }
`;

export const BulletContent = styled.div``;

export const BulletTitle = styled.h3`
  font-family: Montserrat;
  font-size: 24px;
  letter-spacing: 0.2px;
  color: ${colors.white};
  margin-top: 2px;
  margin-bottom: 8px;
`;

export const BulletDescription = styled.div`
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: ${colors.white};
  a {
    color: ${colors.primaryPurple};
  }
`;
