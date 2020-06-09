import React, { FC, useState, useEffect } from "react";
import { DescriptionText, Divider, Button } from "styles/components";
import { Row, Col } from "react-grid-system";
import { useHistory } from "react-router";
import { useForm, ErrorMessage } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { onSubmit } from "./on-submit";
import { validationSchema } from "./schema";
import {
  StyledError,
  Select,
  Input,
  TextArea,
  StyledForm,
  InputLabel,
} from "./styles";
import { Box } from "react-basic-blocks";
import colors from "styles/colors";

interface IProps {
  slug: string;
  id: string;
}

const Form: FC<IProps> = ({ slug, id }) => {
  const [date, setDate] = useState<Date>(new Date());
  const [formErrored, setFormErrored] = useState<boolean>(false);
  const { push } = useHistory();
  const { register, handleSubmit, errors, setValue } = useForm({
    validationSchema,
  });
  useEffect(() => {
    register("options.event_date");
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <StyledForm
        onSubmit={handleSubmit((data) =>
          onSubmit(data, slug, setFormErrored, push)
        )}
      >
        {formErrored ? (
          <ErrorMessage
            as={StyledError}
            name="formerror"
            message="Form submission failed, please try again"
            errors={{ formerror: {} }}
          />
        ) : null}
        <input type="hidden" name="talent_id" value={id} ref={register} />
        <DescriptionText>
          Please provide some additional information to begin the booking
          process.
        </DescriptionText>
        <DescriptionText weight="bold" margin="30px 0">
          1. Enter Your Event Details
        </DescriptionText>
        <Divider width="200px" />

        <Row>
          <Col xs={12} sm={6}>
            <InputLabel>Event Type</InputLabel>
            <Select>
              <option disabled selected>
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
          <Col xs={12} sm={6}>
            <Box
              borderRadius="12px"
              border={`1px solid ${colors.purpleLiner}`}
              padding="24px"
              margin="5px 0"
            >
              <DescriptionText weight="bold">Keynote</DescriptionText>
            </Box>
          </Col>
          <Col xs={12} sm={6}>
            <Box
              borderRadius="12px"
              border={`1px solid ${colors.purpleLiner}`}
              padding="24px"
              margin="5px 0"
            >
              <DescriptionText weight="bold">Digital Q&A</DescriptionText>
            </Box>
          </Col>
          <Col xs={12} sm={6}>
            <Box
              borderRadius="12px"
              border={`1px solid ${colors.purpleLiner}`}
              padding="24px"
              margin="5px 0"
            >
              <DescriptionText weight="bold">Video Message</DescriptionText>
            </Box>
          </Col>
          <Col xs={12} sm={6}>
            <Box
              borderRadius="12px"
              border={`1px solid ${colors.purpleLiner}`}
              padding="24px"
              margin="5px 0"
            >
              <DescriptionText weight="bold">Panel Discussion</DescriptionText>
            </Box>
          </Col>
          <Col xs={12} sm={6}>
            <Box
              borderRadius="12px"
              border={`1px solid ${colors.purpleLiner}`}
              padding="24px"
              margin="5px 0"
            >
              <DescriptionText weight="bold">Live Drop In</DescriptionText>
            </Box>
          </Col>
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
            <ErrorMessage
              as={StyledError}
              errors={errors}
              name="options.budget_min_cents"
            />
          </Col>
          <Col xs={6} sm={3}>
            <Input
              placeholder="$ Max"
              name="options.budget_max_cents"
              ref={register}
            />
            <ErrorMessage
              as={StyledError}
              errors={errors}
              name="options.budget_max_cents"
            />
          </Col>
          <Col xs={12} sm={6}>
            <InputLabel>Event Theme</InputLabel>
            <Input
              placeholder="Tech, Education, Politics..."
              name="options.event_theme"
              ref={register}
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
        <Button margin="50px 0">Submit Your Booking Request</Button>
      </StyledForm>
    </>
  );
};

export default Form;
