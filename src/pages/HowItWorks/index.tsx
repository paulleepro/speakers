import React, { FC, lazy } from "react";
import colors from "styles/colors";
import { Visible, useScreenClass } from "components/Grid";
import { productTypes } from "copy";
import LazyWrapper from "components/LazyWrapper";

const Title = lazy(() => import("./Title"));
const Description = lazy(() => import("./Description"));
const OurEvents = lazy(() => import("./OurEvents"));
const Panel = lazy(() => import("./Panel"));
const Outro = lazy(() => import("./Outro"));
const StarPower = lazy(() => import("components/StarPower"));
const Circles = lazy(() => import("components/Circles"));
const TopLeftGradient = lazy(() => import("components/TopLeftGradient"));
const HeaderTags = lazy(() => import("components/HeaderTags"));

const HowItWorks: FC = () => {
  const screenSize = useScreenClass();
  return (
    <LazyWrapper>
      <HeaderTags
        title="How It Works"
        description="We bring our talent directly to you for your upcoming corporate event."
      />
      <Title />
      <TopLeftGradient
        height={["xs", "sm"].includes(screenSize) ? "1100px" : "900px"}
        width={["xs", "sm"].includes(screenSize) ? "100%" : "60%"}
        borderRadius="600px"
      />
      <Description />
      <Circles
        color={colors.purpleLiner}
        top="0"
        size={100}
        maxWidth="600px"
        right
        zIndex="0"
      />
      <OurEvents />
      <Panel {...productTypes[0]} />
      <Visible md lg>
        <Circles
          color={colors.purpleLiner}
          top="100px"
          size={100}
          maxWidth="600px"
          zIndex="0"
        />
      </Visible>
      <Panel {...productTypes[1]} />
      <Panel {...productTypes[2]} />
      <Panel {...productTypes[3]} />
      <Panel {...productTypes[4]} />
      <Outro />
      <Panel marginTop="45px" {...productTypes[5]} />
      <StarPower />
    </LazyWrapper>
  );
};

export default HowItWorks;
