import React, { FC } from "react";
import Title from "./Title";
import Description from "./Description";
import OurEvents from "./OurEvents";
import Panel from "./Panel";
import Outro from "./Outro";
import StarPower from "components/StarPower";

const HowItWorks: FC = () => {
  return (
    <div>
      <Title />
      <Description />
      <OurEvents />
      <Panel
        title="Panel Discussion"
        description="Invite several of the biggest names across any field to join a live panel discussion with other speakers, focusing on a particular topic of your choice!"
        imageUrl="/images/alright.png"
        iconUrl="/images/group.png"
      />
      <Panel
        title="Keynote"
        description="For your next conference, have the biggest name speaker deliver their long-form message digitally! The talk can be either live or pre-recorded, and will focus all of the topics that matter to you and your business."
        imageRight
        imageUrl="/images/keynote.png"
        iconUrl="/images/presentation.png"
      />
      <Panel
        title="Digital Q&A"
        description="Bring a traditional Q&A to a digital setting by booking talent to join a live chat where the audience can ask them specific questions."
        imageUrl="/images/shaq-people.png"
        iconUrl="/images/chat.png"
      />
      <Panel
        title="Live Drop In"
        description="The content of the chat can be whatever you like,  ranging from a quick comedy set or musical performance, wishing someone a happy birthday, or a shout out to someone for  business win."
        imageRight
        imageUrl="/images/kevin.png"
        iconUrl="/images/video-conference.png"
      />
      <Panel
        title="Digital Video Message"
        description="The talent of your choice will provide a short, pre-recorded video message based on a brief provided by you!"
        imageUrl="/images/obama.png"
        iconUrl="/images/video-bubble.png"
      />
      <Outro />
      <Panel
        title="Don’t forget live…"
        description="Invite several of the biggest names across any field to join a live panel discussion with other speakers, focusing on a particular topic."
        imageUrl="/images/some-guy.png"
      />
      <StarPower />
    </div>
  );
};

export default HowItWorks;
