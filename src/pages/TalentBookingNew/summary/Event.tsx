import React, { FC, useContext } from "react";
import EditIcon from "assets/icons/Edit";
import { Button } from "styles/components";
import { Box } from "react-basic-blocks";
import { BookingInquiryContext } from "../BookingInquiryContext";
import FieldSection from "../components/FormSummary/FieldSection";
import { Border } from "../components/FormSummary/styles";
import { Title } from "./styles";

const EventSummary: FC<any> = () => {
  const { bookingInquiry, currentStep, setCurrentStep } = useContext(
    BookingInquiryContext
  );

  const {
    event_name,
    event_type,
    event_focus,
    event_topics,
    event_audience,
    event_audience_size_range,
    event_notes,
  } = bookingInquiry;

  const handleClick = () => {
    setCurrentStep(0);
  };

  return (
    <Box>
      <Title active={!!event_name}>
        {event_name ? event_name : "Event Details"}
        {currentStep > 0 && (
          <Button
            padding="0"
            margin="0"
            backgroundColor="transparent"
            onClick={handleClick}
          >
            <EditIcon />
          </Button>
        )}
      </Title>
      <FieldSection order={1} label="Format" value={event_type} />
      <FieldSection order={2} label="Focus" value={event_focus} />
      <FieldSection order={3} label="Topic" value={event_topics?.join(", ")} />
      <FieldSection order={4} label="Audience" value={event_audience} />
      <FieldSection order={5} label="Size" value={event_audience_size_range} />
      <FieldSection order={6} label="Notes" value={event_notes} />
      <FieldSection order={7} label="Event Name" value={event_name} />
      <Border />
    </Box>
  );
};

export default EventSummary;
