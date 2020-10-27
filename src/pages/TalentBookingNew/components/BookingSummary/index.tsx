import React from "react";

import { Button } from "styles/components";
import { Wrapper } from "./styles";
import EventSummary from "../../summary/Event";
import SpeakersSummary from "../../summary/Speakers";
import DetailsSummary from "../../summary/Details";

const BookingSummary = () => {
  return (
    <Wrapper>
      <EventSummary />
      <SpeakersSummary />
      <DetailsSummary />
      <Button variant="outline" width="100%">
        Save for later
      </Button>
    </Wrapper>
  );
};

export default BookingSummary;
