import styled from "styled-components";
import colors from "styles/colors";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  background-color: transparent;
  border: 1px solid ${colors.midGrey};
  border-radius: 12px;
  outline: none;
  padding: 14px 24px;
  width: 100%;

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

export const SearchWrapper = styled.div`
  margin-top: 32px;
`;
