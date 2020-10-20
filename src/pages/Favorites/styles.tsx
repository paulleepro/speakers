import styled from "styled-components";
import colors from "styles/colors";
import { Box } from "react-basic-blocks";

export const StepWrapper = styled(Box)`
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 24px;
  }
`;

export const StepsRow = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media (max-width: 1023px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const DashedLine = styled.img`
  margin: 24px -134px 0;

  @media (max-width: 1023px) {
    margin: 16px 0;
  }
`;

export const StepTitle = styled(Box)`
  font-family: Montserrat;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0.2px;
  text-align: center;
  color: ${colors.white};
`;

export const ExploreCard = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: solid 1px ${colors.purpleLiner};
  background-color: ${colors.darkPurpleFill};
  padding: 60px 0;

  @media (max-width: 1023px) {
    padding: 32px 0 24px;
  }
`;

export const ExploreDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.2px;
  text-align: center;
  color: ${colors.midGrey};
  max-width: 572px;
  margin: 24px 0 40px;

  @media (max-width: 1023px) {
    margin: 24px 0 32px;
  }
`;
