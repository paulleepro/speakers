import React, { lazy, useContext } from "react";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import colors from "styles/colors";
import { Row, Col, Visible } from "components/Grid";
import LazyWrapper from "components/LazyWrapper";
import QuestionHeader from "../../common/QuestionHeader";
import QuestionContent from "../../common/QuestionContent";
import InputText from "../../common/InputText";
import InputRadio, { RadioInputOption } from "../../common/InputRadio";
import DatePicker from "../../common/DatePicker";
import Select from "../../common/Select";
import { BookingInquiryContext } from "../../BookingInquiryContext";

const ReactTooltip = lazy(() => import("react-tooltip"));

const DetailsForm = () => {
  const { bookingInquiry, setBookingInquiry } = useContext(
    BookingInquiryContext
  );

  const handleInputChange = (e: any): void => {
    const { name, value } = e.target;

    setBookingInquiry({
      ...bookingInquiry,
      [name]: value,
    });
  };

  return (
    <>
      <h3>Event Details</h3>

      <QuestionHeader
        order={1}
        title="You and your company"
        description="Tell us about yourself."
      />
      <QuestionContent>
        <Row>
          <Col md={6}>
            <InputText
              name="host_full_name"
              value={bookingInquiry.host_full_name}
              onChange={handleInputChange}
              label="Full Name"
              hasMargin
            />
          </Col>
          <Col md={6}>
            <InputText
              name="host_company_name"
              value={bookingInquiry.host_company_name}
              onChange={handleInputChange}
              label="Company or Organization"
              hasMargin
            />
          </Col>
          <Col md={6}>
            <InputText
              name="host_role"
              value={bookingInquiry.host_role}
              onChange={handleInputChange}
              label="Your Role"
              hasMargin
            />
          </Col>
          <Col md={6}>
            <InputText
              name="host_phone"
              value={bookingInquiry.host_phone}
              onChange={handleInputChange}
              label="Phone Number"
              hasMargin
            />
          </Col>
        </Row>
      </QuestionContent>

      <QuestionHeader
        order={2}
        title="Event timing & location"
        description="Share event details with us."
      />
      <QuestionContent>
        <Row>
          <Col md={6}>
            <DatePicker
              icon={
                <CalendarTodayOutlinedIcon
                  style={{ color: colors.primaryPurple }}
                />
              }
              label="Date of Event"
              hasMargin
              onDateChange={(date) => {
                setBookingInquiry({
                  ...bookingInquiry,
                  event_date_start: date,
                });
              }}
              value={bookingInquiry.event_date_start}
              placeholder="MM/DD/YYYY"
            />
          </Col>
          <Col md={6}>
            <Select
              options={[
                { value: "Morning", label: "Morning" },
                { value: "Midday", label: "Midday" },
                { value: "Afternoon", label: "Afternoon" },
                { value: "Evening", label: "Evening" },
              ]}
              onChange={handleInputChange}
              value={bookingInquiry.event_time}
              name="event_time"
              placeholder="Time of Day"
              label="When"
              hasMargin
            />
          </Col>
          <Col md={6}>
            <Select
              options={[{ value: "United States", label: "United States" }]}
              onChange={handleInputChange}
              value={bookingInquiry.event_country}
              name="event_country"
              placeholder="Select Country"
              label="Country"
              hasMargin
            />
          </Col>
          <Col md={6}>
            <InputText
              name="event_city_State"
              value={bookingInquiry.event_city_State}
              onChange={handleInputChange}
              label="City, State"
              hasMargin
            />
          </Col>
        </Row>
      </QuestionContent>

      <QuestionHeader
        order={3}
        title="Are your dates flexible?"
        description="Our agents will coordinate with the speaker and your schedule to find a perfect fit."
        tooltipIcon={
          <>
            <HelpOutlineIcon
              data-tip
              data-for="your-flexible-date"
              style={{ color: colors.primaryPurple, fontSize: 30 }}
            />
            <Visible md lg>
              <LazyWrapper>
                <ReactTooltip
                  id="your-flexible-date"
                  place="right"
                  type="dark"
                  effect="float"
                  className="tooltip"
                  backgroundColor={colors.black}
                  border
                  borderColor={colors.primaryPurple}
                >
                  Being flexible allows agents to find more speakers for your
                  event, they'll search for speakers available the week
                  specified
                </ReactTooltip>
              </LazyWrapper>
            </Visible>
          </>
        }
      />
      <QuestionContent>
        <Row>
          <InputRadio
            options={[
              { id: "yes", value: true, label: "Yes" },
              { id: "no", value: false, label: "No" },
            ]}
            name="event_dates_flexible"
            selected={bookingInquiry.event_dates_flexible}
            onChange={(value: any) => {
              setBookingInquiry({
                ...bookingInquiry,
                event_dates_flexible: value,
              });
            }}
          />
        </Row>
      </QuestionContent>

      <QuestionHeader
        order={4}
        title="Select your budget range"
        description="This will help us tailor your event and speaker options."
        tooltipIcon={
          <>
            <HelpOutlineIcon
              data-tip
              data-for="your-budget-range"
              style={{ color: colors.primaryPurple, fontSize: 30 }}
            />
            <Visible md lg>
              <LazyWrapper>
                <ReactTooltip
                  id="your-budget-range"
                  place="right"
                  type="dark"
                  effect="float"
                  className="tooltip"
                  backgroundColor={colors.black}
                  border
                  borderColor={colors.primaryPurple}
                >
                  Price ranges can vary from speaker to speaker
                </ReactTooltip>
              </LazyWrapper>
            </Visible>
          </>
        }
      />
      <QuestionContent>
        <Row>
          {[
            { id: "1", value: "$10,000 & Under", label: "$10,000 & Under" },
            {
              id: "2",
              value: "$10,000 - $20,000",
              label: "$10,000 - $20,000",
            },
            { id: "3", value: "$20,000 & Up", label: "$20,000 & Up" },
          ].map((option) => (
            <Col md={4}>
              <RadioInputOption
                key={option.id}
                option={option}
                name="event_budget_range"
                selected={bookingInquiry.event_budget_range}
                onChange={(value: any) => {
                  setBookingInquiry({
                    ...bookingInquiry,
                    event_budget_range: value,
                  });
                }}
              />
            </Col>
          ))}
        </Row>
        <InputText
          name="event_budget_custom_range"
          value={bookingInquiry.event_budget_custom_range}
          onChange={handleInputChange}
          placeholder="Have a specific budget?"
          icon={
            <>
              <HelpOutlineIcon
                data-tip
                data-for="your-budget-range-input"
                style={{ color: colors.primaryPurple, fontSize: 30 }}
              />
              <Visible md lg>
                <LazyWrapper>
                  <ReactTooltip
                    id="your-budget-range-input"
                    place="right"
                    type="dark"
                    effect="float"
                    className="tooltip"
                    backgroundColor={colors.black}
                    border
                    borderColor={colors.primaryPurple}
                  >
                    Price ranges can vary from speaker to speaker
                  </ReactTooltip>
                </LazyWrapper>
              </Visible>
            </>
          }
        />
      </QuestionContent>
    </>
  );
};

export default DetailsForm;
