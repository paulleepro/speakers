import React, { FC } from "react";
import Title from "./Title";
import Description from "./Description";
import OurEvents from "./OurEvents";
import Panel from "./Panel";
import Outro from "./Outro";
import StarPower from "components/StarPower";
import Circles from "components/Circles";
import colors from "styles/colors";
import { Visible, useScreenClass } from "components/Grid";
import TopLeftGradient from "components/TopLeftGradient";
import HeaderTags from "components/HeaderTags";
import { productTypes } from "copy";

const HowItWorks: FC = () => {
  const screenSize = useScreenClass();
  return (
    <>
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
    </>
  );
};

export default HowItWorks;
