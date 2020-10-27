import React, { FC, useContext } from "react";
import EditIcon from "assets/Icons/Edit";
import { Button } from "styles/components";
import { Box } from "react-basic-blocks";
import { BookingInquiryContext } from "../BookingInquiryContext";
import FieldSection from "../components/FormSummary/FieldSection";
import { Title } from "./styles";
import { QuestionBullet } from "../common/QuestionHeader/styles";
import { Field, Border } from "../components/FormSummary/styles";

export const SummaryField: FC<any> = ({ label, value }) => {
  if (value === null || value === undefined) {
    return null;
  }

  return (
    <Field>
      <span>{label}:</span>
      {value}
    </Field>
  );
};

const DetailsSummary: FC = () => {
  const { bookingInquiry, currentStep, setCurrentStep } = useContext(
    BookingInquiryContext
  );

  if (currentStep < 2) {
    return null;
  }

  const {
    host_full_name,
    host_company_name,
    host_role,
    host_phone,
    event_date_start,
    event_time,
    event_country,
    event_city_State,
    event_dates_flexible,
    event_budget_range,
  } = bookingInquiry;

  const handleClick = () => {
    setCurrentStep(2);
  };

  return (
    <Box>
      <Title active>
        {host_full_name ? host_full_name : "Details"}
        {currentStep > 2 && (
          <Button
            padding="0"
            margin="0"
            backgroundColor="transparent"
            onClick={handleClick}
          >
            <EditIcon />
          </Button>
        )}
      </Title>
      {(host_company_name || host_role || host_phone) && (
        <Box flexDirection="row">
          <QuestionBullet margin="0 8px 0 0">1</QuestionBullet>
          <Box flexDirection="column" margin="0 0 16px 0">
            <SummaryField label="Org" value={host_company_name} />
            <SummaryField label="Role" value={host_role} />
            <SummaryField label="Phone" value={host_phone} />
          </Box>
        </Box>
      )}
      {(event_date_start ||
        event_time ||
        event_country ||
        event_city_State) && (
        <Box flexDirection="row">
          <QuestionBullet margin="0 8px 0 0">2</QuestionBullet>
          <Box flexDirection="column" margin="0 0 16px 0">
            <SummaryField label="Date of Event" value={event_date_start} />
            <SummaryField label="When" value={event_time} />
            <SummaryField label="Country" value={event_country} />
            <SummaryField label="State" value={event_city_State} />
          </Box>
        </Box>
      )}
      <FieldSection
        order={3}
        label="Dates Flexible"
        value={`${event_dates_flexible}`}
      />
      {(event_budget_range || event_budget_range) && (
        <Box flexDirection="row">
          <QuestionBullet margin="0 8px 0 0">4</QuestionBullet>
          <Box flexDirection="column" margin="0 0 16px 0">
            <SummaryField label="Budget Range" value={event_budget_range} />
            <SummaryField label="Specific Budget" value={event_budget_range} />
          </Box>
        </Box>
      )}
      <FieldSection order={5} label="More Events" value="Yes" />
      <Border />
    </Box>
  );
};

export default DetailsSummary;
