import styled from "styled-components";
import colors from "styles/colors";

export const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeroWrapper = styled.div<{ backgroundImage: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 83px);
  background-image: url(${(props) => props.backgroundImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: 135%;
  background-position-y: 50px;

  @media (max-width: 1024px) {
    min-height: calc(100vh - 64px);
  }
`;

export const CustomizeWrapper = styled.div`
  margin-top: 160px;
  width: 100%;
  background-image: linear-gradient(to bottom, transparent, #221e29);
  border-radius: 0 0 250px 0;
  padding-bottom: 100px;
`;

export const CirclesWrapper = styled.div`
  position: absolute;
  top: -200px;
  left: -500px;
  width: 1000px;
  height: 1000px;
  z-index: 1;
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
    rgba(34, 30, 41, 0),
    ${colors.purpleBgFill}
  );
  border-radius: 0 0 600px 0;
`;
