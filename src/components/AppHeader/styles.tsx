import styled from "styled-components";
import colors from "styles/colors";

export const Wrapper = styled.div<{
  backgroundColor: string;
  justifyContent: string;
}>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent};
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  transition: background-color 0.5s ease;
  width: 100%;

  padding: 0 24px;
  height: 83px;
  z-index: 10;

  @media (max-width: 1023px) {
    height: 64px;
    position: relative;
  }
`;

export const SubnavWrapper = styled.div<{
  backgroundColor: string;
}>`
  padding: 0;
  position: sticky;
  top: 0;
  box-shadow: 0px 2px 6px -2px rgba(0, 0, 0, 0.7);
  height: 83px;
  z-index: 10;
  background-color: ${(props) => props.backgroundColor};
`;

export const SubnavContainer = styled.div<{
  justifyContent: string;
}>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent};
  align-items: center;
  transition: background-color 0.5s ease;
  width: 100%;
  justifycontent: string;
  height: 83px;
`;

export const SearchBarContainer = styled.div`
  width: 570px;
`;

export const LinkText = styled.span<{ noMargin?: boolean }>`
  color: white;
  ${(props) => (props.noMargin ? "" : "margin-left: 30px;")}
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
