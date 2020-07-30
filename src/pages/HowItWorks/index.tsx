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
      <Panel
        title="Panel Discussion"
        description="Invite the most recognizable names in the field to join a panel discussion with industry experts, focusing on a particular topic of your choice."
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
        title="Keynote Presentation"
        description="For your next conference, welcome attendees with a long-form message conducted by your distinguished speaker. The talk can be either live or pre-recorded and centers on a subject that matters to your business."
        imageRight
        imageUrl="/images/kendrick-lamar.png"
        iconUrl="/images/presentation.png"
      />
      <Panel
        title="Digital Q&A Session"
        description="Bring your traditional Q&A session to an online experience by booking talent to join a live chat where attendees can ask them specific questions directly."
        imageUrl="/images/shaq-collage.png"
        iconUrl="/images/chat.png"
      />
      <Panel
        title="Live Drop-In"
        description="The content of the chat can be whatever you like, ranging from a quick comedy set or musical performance, a happy birthday wish, or even a shoutout for a business win."
        imageRight
        imageUrl="/images/kevin-hart.png"
        iconUrl="/images/video-conference.png"
      />
      <Panel
        title="Digital Video Message"
        description="The talent of your choice will deliver a pre-recorded message based on brief provided by you."
        imageUrl="/images/barack-obama.png"
        iconUrl="/images/video-bubble.png"
      />
      <Outro />
      <Panel
        title="Live Events"
        description="Whatever the event type, we have a full roster of names to choose from across all industries."
        imageUrl="/images/stephen-colbert.png"
      />
      <StarPower />
    </>
  );
};

export default HowItWorks;
