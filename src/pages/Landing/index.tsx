import React, { FC, useState, useEffect, lazy } from "react";
import { LandingWrapper, TopSemi } from "./styles";
import { Visible, useScreenClass } from "components/Grid";
import colors from "styles/colors";
import { heroData } from "./hero-data";

const Circles = lazy(() => import("components/Circles"));
const HeaderTags = lazy(() => import("components/HeaderTags"));
const StarPower = lazy(() => import("components/StarPower"));

const CustomizeEvent = lazy(() => import("./CustomizeEvent"));
const Explore = lazy(() => import("./Explore"));
const HeroMedium = lazy(() => import("./HeroMedium"));
const HeroSmall = lazy(() => import("./HeroSmall"));
const HowItWorks = lazy(() => import("./HowItWorks"));

const Landing: FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const heroDatum = heroData[counter];
  const screenSize = useScreenClass();

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter: number) => (counter === 2 ? 0 : counter + 1));
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <HeaderTags description="WME Virtual Performers is bringing talent directly to your business." />
      <section>
        <LandingWrapper>
          <TopSemi />
          <Visible md lg>
            <HeroMedium {...heroDatum} />
          </Visible>
          <Visible xs sm>
            <HeroSmall {...heroDatum} />
          </Visible>
          <Explore />
          <HowItWorks />
          <Circles
            top="-20px"
            size={"xs" === screenSize ? 75 : 45}
            maxWidth="700px"
            color={colors.primaryPurple}
            zIndex="-1"
          />
          <CustomizeEvent />
        </LandingWrapper>
        <StarPower />
      </section>
    </>
  );
};

export default Landing;
