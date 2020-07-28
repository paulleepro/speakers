import React, { FC, useState, useEffect } from "react";
import {
  DescriptionText,
  Divider,
  Button,
  StyledError,
} from "styles/components";
import { Row, Col } from "components/Grid";
import { useHistory } from "react-router";
import { useForm, ErrorMessage } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { onSubmit } from "./on-submit";
import { validationSchema } from "./schema";
import { BeatLoader } from "react-spinners";
import { Select, Input, TextArea, StyledForm, InputLabel } from "./styles";
import EventTypeRadio from "./EventTypeRadio";

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
  });
  useEffect(() => {
    register("options.event_date");
    register("options.event_type_options");
    // eslint-disable-next-line
  }, []);

  const eventTypes = watch("options.event_type_options", []);

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
              <DescriptionText margin="24px 0 0 0">
                Please provide some additional information to begin the booking
                process.
              </DescriptionText>
            </Col>
          </Row>
          <DescriptionText weight="bold" margin="30px 0">
            1. Enter Your Event Details
          </DescriptionText>
          <Divider width="200px" />

          <Row>
            <Col xs={12} sm={6}>
              <InputLabel>Event Type</InputLabel>
              <Select
                ref={register}
                name="options.event_type"
                defaultValue="default"
              >
                <option disabled value="default">
                  Select Event Type
                </option>
                <option value="in_person">In Person</option>
                <option value="digital">Digital Event</option>
              </Select>
              <ErrorMessage
                as={StyledError}
                errors={errors}
                name="options.event_type"
              />
            </Col>
            <Col xs={12} sm={6}>
              <InputLabel>Event Date</InputLabel>
              <DatePicker
                onChange={(value: Date) => {
                  setValue("options.event_date", value);
                  setDate(value);
                }}
                selected={date}
                className="date-picker"
              />
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
            />
            <EventTypeRadio
              label="Digital Q&A"
              eventTypes={eventTypes}
              setValue={setValue}
            />
            <EventTypeRadio
              label="Video Message"
              eventTypes={eventTypes}
              setValue={setValue}
            />
            <EventTypeRadio
              label="Panel Discussion"
              eventTypes={eventTypes}
              setValue={setValue}
            />
            <EventTypeRadio
              label="Live Drop In"
              eventTypes={eventTypes}
              setValue={setValue}
            />
          </Row>

          <DescriptionText weight="bold" margin="50px 0 30px 0">
            3. Add Additional Details
          </DescriptionText>
          <Divider width="200px" />
          <Row align="end">
            <Col xs={6} sm={3}>
              <InputLabel>Budget Range</InputLabel>
              <Input
                placeholder="$ Min"
                name="options.budget_min_cents"
                ref={register}
              />
            </Col>
            <Col xs={6} sm={3}>
              <Input
                placeholder="$ Max"
                name="options.budget_max_cents"
                ref={register}
              />
            </Col>
            <Col xs={12} sm={6}>
              <InputLabel>Event Theme</InputLabel>
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
                name="options.budget_min_cents"
              />
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
