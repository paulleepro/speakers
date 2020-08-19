import styled from "styled-components";
import colors from "styles/colors";
import { Box } from "react-basic-blocks";

export const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeroBGWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 8.33%;
  height: 100%;
  width: 50%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 0px;
  margin-top: 100px;
  img {
    width: 100%;
    box-shadow: 50px 50px 24px 0 rgba(0, 0, 0, 0.5);
  }
`;

export const CustomizeWrapper = styled.div`
  margin-top: 120px;
  width: 100%;
  background-image: linear-gradient(to bottom, transparent, #221e29);
  border-radius: 0 0 250px 0;
  padding-bottom: 80px;
`;

export const HowItWorksImage = styled.div`
  z-index: 9;
`;

export const HowItWorksImageWrapper = styled.div`
  z-index: 1;
  display: flex;
`;

export const TopSemi = styled.div`
  z-index: -2;
  position: absolute;
  top: 0;
  left: 0;
  width: 75%;
  height: 1250px;
  object-fit: contain;
  background-image: linear-gradient(
    to bottom,
    rgba(34, 30, 41, 0.5),
    ${colors.purpleBgFill}
  );
  border-radius: 0 0 600px 0;
`;

export const StepWrapper = styled(Box)`
  flex-direction: row;

  @media (max-width: 767px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const DescriptionWrapper = styled(Box)`
  margin: 0 0 0 45px;

  @media (max-width: 767px) {
    margin: 0;
  }
`;

export const CenterOnMobile = styled(Box)`
  align-items: flex-start;

  @media (max-width: 767px) {
    align-items: center;
  }
`;
