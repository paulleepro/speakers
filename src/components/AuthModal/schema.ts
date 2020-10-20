import * as yup from "yup";

export const signUpValidationSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Your email is required"),
  password: yup.string().required(),
});

export const signInValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Your email is required"),
  password: yup.string().required(),
});
