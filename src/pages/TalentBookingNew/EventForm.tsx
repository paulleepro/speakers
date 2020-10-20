import React, { useState } from "react";
import QuestionHeader from "./common/QuestionHeader";
import QuestionContent from "./common/QuestionContent";
import EventTypes from "./components/EventTypes";
import FocusList from "./components/FocusList";
import AudienceList from "./components/AudienceList";
import AudienceSize from "./components/AudienceSize";
import InputText from "./common/InputText";
import Textarea from "./common/Textarea";
import Topics from "./components/Topics";

const EventForm = () => {
  const [eventName, setEventName] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [topics, setTopics] = useState<string>("");

  const handleEventNameChange = (e: any): void => {
    setEventName(e.target.value);
  };

  const handleNotesChange = (e: any): void => {
    setNotes(e.target.value);
  };

  const handleTopicsChange = (e: any): void => {
    setTopics(e.target.value);
  };

  return (
    <>
      <h3>Let's Get Started!</h3>
      <QuestionHeader
        order={1}
        title="Tell us about your event"
        description="Choose from our format types and start customizing from there."
      />
      <EventTypes />

      <QuestionHeader
        order={2}
        title="What’s the focus of your event?"
        description="Select the goal that best matches your event."
      />
      <QuestionContent>
        <FocusList />
      </QuestionContent>

      <QuestionHeader
        order={3}
        title="What topics or themes interest your group?"
        description="Add whichever talking points are most relevant to your group."
      />
      <QuestionContent>
        <Topics value={topics} onChange={handleTopicsChange} />
      </QuestionContent>

      <QuestionHeader
        order={4}
        title="Who is your audience?"
        description="Select which audience type is most applicable."
      />
      <QuestionContent>
        <AudienceList />
      </QuestionContent>

      <QuestionHeader
        order={5}
        title="What is your audience size?"
        description="Select the total number of people attending your event."
      />
      <QuestionContent>
        <AudienceSize />
      </QuestionContent>

      <QuestionHeader
        order={6}
        title="Additional notes"
        description="Use this space to provide additional information around your event. This will help our agents provide better recommendations for your request."
      />
      <QuestionContent>
        <Textarea
          rows={3}
          name="notes"
          value={notes}
          onChange={handleNotesChange}
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
          name="eventName"
          value={eventName}
          onChange={handleEventNameChange}
          placeholder="Event name..."
        />
      </QuestionContent>
    </>
  );
};

export default EventForm;
