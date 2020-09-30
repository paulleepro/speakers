import React, { FC, useState, useEffect, lazy } from "react";
import {
  DescriptionText,
  Divider,
  Button,
  StyledError,
} from "styles/components";
import { Row, Col } from "components/Grid";
import { useHistory } from "react-router";
import { useForm, ErrorMessage } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import { onSubmit } from "./on-submit";
import { validationSchema } from "./schema";
import BeatLoader from "react-spinners/BeatLoader";
import { Input, TextArea, StyledForm, InputLabel } from "./styles";
import EventTypeRadio from "./EventTypeRadio";
import { Box } from "react-basic-blocks";
import colors from "styles/colors";
import LazyWrapper from "components/LazyWrapper";

const DatePicker = lazy(() => import("react-datepicker"));

interface IProps {
  slug: string;
  id: string;
}

const Form: FC<IProps> = ({ slug, id }) => {
  const [date, setDate] = useState<Date>(new Date());
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [formErrored, setFormErrored] = useState<boolean>(false);
  const { push } = useHistory();
  const { register, handleSubmit, errors, setValue, watch } = useForm({
    validationSchema,
    defaultValues: {
      options: {
        event_type: "digital",
        event_date: date,
      },
    },
  });
  useEffect(() => {
    register("options.event_type");
    register("options.event_date");
    register("options.event_type_options");
    // eslint-disable-next-line
  }, []);

  const eventTypes = watch("options.event_type_options", []);
  const selectedEventType = watch("options.event_type", "digital");

  return (
    <>
      <StyledForm
        onSubmit={handleSubmit((data) =>
          onSubmit(data, slug, setFormErrored, push, setSubmitting)
        )}
      >
        <fieldset disabled={submitting}>
          {formErrored ? (
            <ErrorMessage
              as={StyledError}
              name="formerror"
              message="Form submission failed, please try again"
              errors={{ formerror: {} }}
            />
          ) : null}
          <input type="hidden" name="talent_id" value={id} ref={register} />
          <input
            type="hidden"
            name="options.budget_currency"
            value="USD"
            ref={register}
          />
          <Row>
            <Col offset={{ sm: 1, md: 0 }} xs={12} sm={10} md={12}>
              <DescriptionText margin="24px 0 80px 0">
                Please provide some additional information to begin the booking
                process.
              </DescriptionText>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <InputLabel>Select Your Event Type</InputLabel>
              <Box
                className="event_type"
                flexDirection="row"
                border={`1px solid ${colors.purpleLiner}`}
                borderRadius="12px"
                cursor="pointer"
              >
                <Box
                  flexBasis="50%"
                  backgroundColor={
                    selectedEventType === "digital"
                      ? colors.primaryPurple
                      : colors.purpleBgFill
                  }
                  alignItems="center"
                  borderRadius="12px 0 0 12px"
                  onClick={() => setValue("options.event_type", "digital")}
                >
                  <DescriptionText weight="bold" margin="14px 0">
                    Digital Event
                  </DescriptionText>
                </Box>
                <Box
                  flexBasis="50%"
                  backgroundColor={
                    selectedEventType === "in_person"
                      ? colors.primaryPurple
                      : colors.purpleBgFill
                  }
                  alignItems="center"
                  borderRadius="0 12px 12px 0"
                  onClick={() => setValue("options.event_type", "in_person")}
                >
                  <DescriptionText weight="bold" margin="14px 0">
                    In-Person Event
                  </DescriptionText>
                </Box>
              </Box>
              <ErrorMessage
                as={StyledError}
                errors={errors}
                name="options.event_type"
              />
            </Col>
          </Row>
          <DescriptionText weight="bold" margin="30px 0">
            1. Enter Your Event Details
          </DescriptionText>
          <Divider width="200px" />

          <Row>
            <Col xs={12} sm={6}>
              <InputLabel>Event Date</InputLabel>
              <LazyWrapper>
                <DatePicker
                  onChange={(value: Date) => {
                    setValue("options.event_date", value);
                    setDate(value);
                  }}
                  selected={date}
                  className="date-picker"
                />
              </LazyWrapper>
              <ErrorMessage
                as={StyledError}
                errors={errors}
                name="options.event_date"
              />
            </Col>
          </Row>
          <DescriptionText weight="bold" margin="50px 0 30px 0">
            2. Select Event Types You Are Interested In
          </DescriptionText>
          <Divider width="200px" />

          <Row>
            <EventTypeRadio
              label="Keynote"
              eventTypes={eventTypes}
              setValue={setValue}
              eventType={selectedEventType}
            />
            <EventTypeRadio
              label="Digital Q&A"
              eventTypes={eventTypes}
              setValue={setValue}
              digitalOnly
              eventType={selectedEventType}
            />
            <EventTypeRadio
              label="Q&A"
              eventTypes={eventTypes}
              setValue={setValue}
              inPersonOnly
              eventType={selectedEventType}
            />
            <EventTypeRadio
              label="Video Message"
              eventTypes={eventTypes}
              setValue={setValue}
              digitalOnly
              eventType={selectedEventType}
            />
            <EventTypeRadio
              label="Panel Discussion"
              eventTypes={eventTypes}
              setValue={setValue}
              eventType={selectedEventType}
            />
            <EventTypeRadio
              label="Live Drop In"
              eventTypes={eventTypes}
              setValue={setValue}
              digitalOnly
              eventType={selectedEventType}
            />
            <EventTypeRadio
              label="Other"
              eventTypes={eventTypes}
              setValue={setValue}
              inPersonOnly
              eventType={selectedEventType}
            />
          </Row>

          <DescriptionText weight="bold" margin="50px 0 30px 0">
            3. Add Additional Details
          </DescriptionText>
          <Divider width="200px" />
          <Row align="end">
            <Col xs={12} sm={4}>
              <InputLabel>Do You Have a Budget?</InputLabel>
              <Input
                placeholder="$ Enter an estimate"
                name="options.budget_max_cents"
                ref={register}
              />
            </Col>
            <Col xs={12} sm={8}>
              <InputLabel>Do You Have an Event Theme?</InputLabel>
              <Input
                placeholder="Tech, Education, Politics..."
                name="options.event_theme"
                ref={register}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <ErrorMessage
                as={StyledError}
                errors={errors}
                name="options.budget_max_cents"
              />
              <ErrorMessage
                as={StyledError}
                errors={errors}
                name="options.event_theme"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <InputLabel margin="20px 0">Additional Notes</InputLabel>
              <TextArea
                rows={4}
                placeholder="Any specific details about your event…"
                name="options.notes"
                ref={register}
              />
              <ErrorMessage as={StyledError} errors={errors} name="notes" />
            </Col>
          </Row>
          <Row>
            <Col>
              <InputLabel margin="20px 0">Your Email</InputLabel>
              <Input
                placeholder="Your email so we can get in touch…"
                name="user_id"
                ref={register}
              />
              <ErrorMessage as={StyledError} errors={errors} name="user_id" />
            </Col>
          </Row>
          <Button margin="50px 0 120px 0" type="submit">
            {submitting ? (
              <BeatLoader size="8px" loading color="white" />
            ) : (
              "Submit Your Booking Request"
            )}
          </Button>
        </fieldset>
      </StyledForm>
    </>
  );
};

export default Form;
