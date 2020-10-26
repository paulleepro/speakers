export const EVENT_FORM_FIELDS: { [key: string]: string } = {
  event_type: "Format",
  event_focus: "Focus",
  event_topics: "Topic",
  event_audience: "Audience",
  event_audience_size_range: "Size",
  // event_audience_size_min: 'Size',
  // event_audience_size_max: 'Size',
  event_notes: "Notes",
  event_name: "Event Name",
};

export const SPEAKERS_FORM_FIELDS = {
  considered_talent_types: "Types",
  have_hosted_speakers: "Hosted Before",
};

export const DETAILS_FORM_FIELDS = {};

export const STEP_FORMS = [
  {
    title: "Event Details",
    fields: EVENT_FORM_FIELDS,
  },
  {
    title: "Speakers",
    fields: SPEAKERS_FORM_FIELDS,
  },
  {
    title: "Details",
    fields: DETAILS_FORM_FIELDS,
  },
];
