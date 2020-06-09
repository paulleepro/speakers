import React, { FC } from "react";
import HeroMedium from "./HeroMedium";
import { LandingWrapper } from "./styles";
import { Visible } from "react-grid-system";
import Explore from "./Explore";
import CustomizeEvent from "./CustomizeEvent";
import HowItWorks from "./HowItWorks";
import StarPower from "components/StarPower";
import HeroSmall from "./HeroSmall";

const Landing: FC = () => {
  return (
    <LandingWrapper>
      <Visible md lg>
        <HeroMedium />
      </Visible>
      <Visible xs sm>
        <HeroSmall />
      </Visible>
      <Explore />
      <CustomizeEvent />
      <HowItWorks />
      <StarPower />
    </LandingWrapper>
  );
};

export default Landing;
