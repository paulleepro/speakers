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

const HowItWorks: FC = () => {
  const screenSize = useScreenClass();
  return (
    <>
      <HeaderTags
        title="How It Works"
        description="We bring talent directly to you. Our high-profile speakers are available for your next corporate event."
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
      <Panel
        title="Panel Discussion"
        description="Invite several of the biggest names across any field to join a live panel discussion with other speakers, focusing on a particular topic of your choice!"
        imageUrl="/images/matt-mcconaughey.png"
        iconUrl="/images/group.png"
      />
      <Visible md lg>
        <Circles
          color={colors.purpleLiner}
          top="100px"
          size={100}
          maxWidth="600px"
          zIndex="0"
        />
      </Visible>
      <Panel
        title="Keynote"
        description="For your next conference, have the biggest name speaker deliver their long-form message digitally! The talk can be either live or pre-recorded, and will focus all of the topics that matter to you and your business."
        imageRight
        imageUrl="/images/kendrick-lamar.png"
        iconUrl="/images/presentation.png"
      />
      <Panel
        title="Digital Q&A"
        description="Bring a traditional Q&A to a digital setting by booking talent to join a live chat where the audience can ask them specific questions."
        imageUrl="/images/shaq-collage.png"
        iconUrl="/images/chat.png"
      />
      <Panel
        title="Live Drop In"
        description="The content of the chat can be whatever you like,  ranging from a quick comedy set or musical performance, wishing someone a happy birthday, or a shout out to someone for  business win."
        imageRight
        imageUrl="/images/kevin-hart.png"
        iconUrl="/images/video-conference.png"
      />
      <Panel
        title="Digital Video Message"
        description="The talent of your choice will provide a short, pre-recorded video message based on a brief provided by you!"
        imageUrl="/images/barack-obama.png"
        iconUrl="/images/video-bubble.png"
      />
      <Outro />
      <Panel
        title="Don’t forget live…"
        description="Invite several of the biggest names across any field to join a live panel discussion with other speakers, focusing on a particular topic."
        imageUrl="/images/stephen-colbert.png"
      />
      <StarPower />
    </>
  );
};

export default HowItWorks;
