import React, { FC, useState, useEffect } from "react";
import HeroMedium from "./HeroMedium";
import { LandingWrapper, TopSemi } from "./styles";
import { Visible } from "react-grid-system";
import Explore from "./Explore";
import CustomizeEvent from "./CustomizeEvent";
import HowItWorks from "./HowItWorks";
import StarPower from "components/StarPower";
import HeroSmall from "./HeroSmall";
import { heroData } from "./hero-data";

const Landing: FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const heroDatum = heroData[counter];

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter: number) => (counter === 2 ? 0 : counter + 1));
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <LandingWrapper>
      <TopSemi />
      <Visible md lg>
        <HeroMedium {...heroDatum} />
      </Visible>
      <Visible xs sm>
        <HeroSmall {...heroDatum} />
      </Visible>
      <Explore />
      <CustomizeEvent />
      <HowItWorks />
      <StarPower />
    </LandingWrapper>
  );
};

export default Landing;
