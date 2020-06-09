import * as yup from "yup";

const optionsSchema = yup
  .object()
  .shape({
    event_type: yup
      .string()
      .oneOf(["digital", "in_person"])
      .required("Event type is required"),
    event_date: yup.date().required("Event date is required"),
    event_country: yup.string(),
    event_state: yup.string(),
    event_city: yup.string(),
    budget_currency: yup.string().required(),
    budget_min_cents: yup.number().required("Min Budget is required"),
    budget_max_cents: yup.number().required("Max Budget is required"),
    event_theme: yup.string().required("Theme is required"),
  })
  .required();

export const validationSchema = yup.object().shape({
  talent_id: yup.string().required(),
  options: optionsSchema,
  notes: yup.string(),
});
