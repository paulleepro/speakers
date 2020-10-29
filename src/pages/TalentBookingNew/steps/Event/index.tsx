import React, { lazy, useContext } from "react";
import { fetchSingle } from "fetch-hooks-react";
import { ITopic, IListResult } from "types";
import { config } from "config";
import LazyWrapper from "components/LazyWrapper";
import Loader from "components/Loader";
import QuestionHeader from "../../common/QuestionHeader";
import QuestionContent from "../../common/QuestionContent";
import InputText from "../../common/InputText";
import Textarea from "../../common/Textarea";

import EventTypes from "../../components/EventTypes";
import FocusList from "../../components/FocusList";
import AudienceList from "../../components/AudienceList";
import AudienceSize from "../../components/AudienceSize";
import Topics from "../../components/Topics";

import { BookingInquiryContext } from "../../BookingInquiryContext";

const ErrorNotice = lazy(() => import("components/ErrorNotice"));

const EventForm = () => {
  const { bookingInquiry, setBookingInquiry } = useContext(
    BookingInquiryContext
  );

  const { data, isLoading, error } = fetchSingle<IListResult<ITopic>>(
    `${config.speakersTalentUrl}/v1/talents/metadata/topics?order=name:asc`
  );

  if (isLoading) {
    return <Loader />;
  } else if (error || !data) {
    return (
      <LazyWrapper>
        <ErrorNotice />
      </LazyWrapper>
    );
  }

  const updateBookingInquiry = (fieldName: string, value: string): void => {
    setBookingInquiry({
      ...bookingInquiry,
      [fieldName]: value,
    });
  };

  const handleChangeEvent = (e: any): void => {
    const { name, value } = e.target;
    updateBookingInquiry(name, value);
  };

  const handleTopicsChange = (e: any): void => {
    setBookingInquiry({
      ...bookingInquiry,
      event_topics: [e.target.value],
    });
  };

  return (
    <>
      <h3>Let's Get Started!</h3>
      <QuestionHeader
        order={1}
        title="Tell us about your event"
        description="Choose from our format types and start customizing from there."
      />
      <EventTypes
        selected={bookingInquiry.event_type}
        onSelect={(value) => updateBookingInquiry("event_type", value)}
      />

      <QuestionHeader
        order={2}
        title="What’s the focus of your event?"
        description="Select the goal that best matches your event."
      />
      <QuestionContent>
        <FocusList
          selected={bookingInquiry.event_focus}
          onSelect={(value) => updateBookingInquiry("event_focus", value)}
        />
      </QuestionContent>

      <QuestionHeader
        order={3}
        title="What topics or themes interest your group?"
        description="Add whichever talking points are most relevant to your group."
      />
      <QuestionContent>
        <Topics
          list={data?.data}
          value={(bookingInquiry.event_topics || [])[0] || ""}
          onChange={handleTopicsChange}
        />
      </QuestionContent>

      <QuestionHeader
        order={4}
        title="Who is your audience?"
        description="Select which audience type is most applicable."
      />
      <QuestionContent>
        <AudienceList
          selected={bookingInquiry.event_audience}
          onChange={(value) => updateBookingInquiry("event_audience", value)}
        />
      </QuestionContent>

      <QuestionHeader
        order={5}
        title="What is your audience size?"
        description="Select the total number of people attending your event."
      />
      <QuestionContent>
        <AudienceSize
          selected={bookingInquiry.event_audience_size_range}
          onSelect={(value) =>
            updateBookingInquiry("event_audience_size_range", value)
          }
        />
      </QuestionContent>

      <QuestionHeader
        order={6}
        title="Additional notes"
        description="Use this space to provide additional information around your event. This will help our agents provide better recommendations for your request."
      />
      <QuestionContent>
        <Textarea
          rows={3}
          name="event_notes"
          value={bookingInquiry.event_notes}
          onChange={handleChangeEvent}
          placeholder="Additional notes..."
        />
      </QuestionContent>

      <QuestionHeader
        order={7}
        title="Event Name"
        description="This will provide more context for our agents. If you don't have an event name finalized, please share a working title."
      />
      <QuestionContent>
        <InputText
          name="event_name"
          value={bookingInquiry.event_name}
          onChange={handleChangeEvent}
          placeholder="Event name..."
        />
      </QuestionContent>
    </>
  );
};

export default EventForm;
