import styled from "styled-components";
import colors from "styles/colors";

export const TypeLink = styled.span`
  color: white;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: 0.2px;
  display: block;
  margin: 0 0 20px 0;
`;

export const TypesWrapper = styled.div`
  background-color: ${colors.darkPurpleFill};

  @media (min-width: 1023px) {
    position: absolute;
    width: 100%;
    top: 83px;
    left: 0;
    z-index: 16;
    padding: 50px 0;
    border-bottom: 1px solid ${colors.purpleLiner};
  }
`;

export const CaretRight = styled.div`
  ::before {
    width: 0;
    height: 0;
    border-left: 10px solid ${colors.primaryPurple};
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    content: "";
    font-size: 0px;
    vertical-align: middle;
    margin-left: 10px;
  }
`;

export const CaretLeft = styled.div`
  ::before {
    width: 0;
    height: 0;
    border-right: 10px solid ${colors.midGrey};
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    content: "";
    font-size: 0px;
    vertical-align: middle;
    margin-right: 10px;
  }
`;
