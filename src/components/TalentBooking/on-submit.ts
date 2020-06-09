import { config } from "config";

export const onSubmit = (
  data: any,
  slug: string,
  setFormErrored: (val: boolean) => void,
  push: (val: string) => void
) => {
  const options = {
    ...data.options,
    budget_max_cents: data.options.budget_max_cents * 100,
    budget_min_cents: data.options.budget_min_cents * 100,
  };
  data = { ...data, options };
  fetch(`${config.speakersBookingUrl}/v1/booking-inquiry`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      if (res.ok) {
        push(`/speaker/${slug}/confirmation`);
      } else {
        setFormErrored(true);
      }
    })
    .catch(() => setFormErrored(true));
};
