import styled from "styled-components";
import { Link } from "react-router-dom";
import { Box, Text } from "react-basic-blocks";
import colors from "styles/colors";

export const Wrapper = styled(Box)`
  margin: 80px 0;
`;

export const StyledText = styled(Text)`
  font-size: 20px;
`;

export const StyledLink = styled(Link)`
  color: #fff;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: 0.3px;
  display: block;

  :hover {
    color: ${colors.primaryPurple};
    text-decoration: underline;
  }
`;
