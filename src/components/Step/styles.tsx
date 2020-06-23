import styled from "styled-components";
import { Box } from "react-basic-blocks";

export const StepWrapper = styled(Box)`
  flex-direction: row;

  @media (max-width: 1023px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const DescriptionWrapper = styled(Box)`
  margin: 0 0 0 45px;

  @media (max-width: 1023px) {
    margin: 0;
  }
`;
