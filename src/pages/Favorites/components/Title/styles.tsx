import styled from "styled-components";
import colors from "../../../../styles/colors";

export const HeaderDivider = styled.div`
  width: 100%;
  margin: 40px 0 80px 0;
  border-bottom: 1px solid ${colors.purpleBgFill};

  @media (max-width: 1023px) {
    margin: 0 0 24px 0;
  }

  @media (max-width: 767px) {
    margin: 0 0 10px 0;
  }
`;
