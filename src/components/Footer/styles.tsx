import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "styles/colors";

export const FooterLink = styled(Link)`
  font-weight: normal;
  font-size: 16px;
  color: white;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 24px;
  letter-spacing: 0.2px;
  display: block;
`;

export const InfoText = styled.span`
  text-align: center;
  font-weight: normal;
  font-size: 16px;
  color: ${colors.midGrey};
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 0.2px;

  a {
    color: ${colors.midGrey};
  }
`;

export const ImageWrapper = styled.div`
  display: flex;

  @media (max-width: 1023px) {
    justify-content: center;
    margin: 20px 0;
  }
`;
