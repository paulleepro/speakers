import styled from "styled-components";
import { Box } from "react-basic-blocks";
import colors from "styles/colors";

export const Wrapper = styled(Box)`
  padding: 0 24px;
  position: sticky;
  top: 0;
  box-shadow: 0px 2px 6px -2px rgba(0, 0, 0, 0.7);
  height: 83px;
  z-index: 10;

  @media (max-width: 1024px) {
    height: 64px;
    position: relative;
  }
`;

export const LinkText = styled.span`
  color: white;
  margin-left: 30px;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.2px;
`;

export const MenuContainer = styled.div`
  position: absolute;
  cursor: pointer;
  right: 16px;
`;

export const SearchWrapper = styled.div<{ searchExtended: boolean }>`
  width: ${(props) => (props.searchExtended ? "424px" : "24px")};
  transition: width 0.3s;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CaretDown = styled.div`
  ::before {
    width: 0;
    height: 0;
    border-top: 5px solid ${colors.primaryPurple};
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    content: "";
    font-size: 0px;
    vertical-align: middle;
    margin-left: 5px;
  }
`;
