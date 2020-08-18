import { config } from "config";
import qs from "qs";

const filterEventTypeOptions = (eventType: string, options: string[]) => {
  if (eventType === "digital") {
    return options.filter((x) => !["q_a", "other"].includes(x));
  } else {
    return options.filter(
      (x) => !["digital_q_a", "video_message", "live_drop_in"].includes(x)
    );
  }
};

export const onSubmit = (
  data: any,
  slug: string,
  setFormErrored: (val: boolean) => void,
  push: (val: string) => void,
  setSubmitting: (val: boolean) => void
) => {
  const options = {
    ...data.options,
    budget_max_cents: data.options.budget_max_cents * 100,
    budget_min_cents: 0,
    event_type_options: filterEventTypeOptions(
      data.options.event_type,
      data.options.event_type_options
    ),
  };
  data = { ...data, options };
  setSubmitting(true);
  fetch(`${config.speakersBookingUrl}/v1/booking-inquiry`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      if (res.ok) {
        push(`/talent/${slug}/confirmation?${qs.stringify(data)}`);
      } else {
        setFormErrored(true);
        setSubmitting(false);
      }
    })
    .catch(() => {
      setFormErrored(true);
      setSubmitting(false);
    });
};
